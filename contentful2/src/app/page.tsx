import Image from "next/image";
import { Inter } from "next/font/google";
import { documentToReactComponents } from "@contentful/rich-text-react-renderer";

const inter = Inter({ subsets: ["latin"] });

async function getBlogs() {
  const res = await fetch(
    `https://cdn.contentful.com/spaces/fsfswzwrtaao/entries?access_token=COVkRjb_6GIrFKnQpLgmzaFfEVyzuw0M4VWodG9sEp4&content_type=blog`,
    { cache: "no-store" }
  );

  // Recommendation: handle errors
  if (!res.ok) {
    // This will activate the closest `error.js` Error Boundary
    throw new Error("Failed to fetch data");
  }

  return res.json();
}

export default async function Home() {
  const blogs = await getBlogs();
  return (
    <div>
      {blogs.items.map((item: any) => (
        <>
          <div className="text-2xl flex justify-between">
            {item.fields.title}
          </div>
          <div className="text-lg">
            {documentToReactComponents(item.fields.description)}
          </div>
          <div>
            {blogs.includes.Asset.map((a: any) => (
              <div>
                {item.fields.img.sys.id == a.sys.id ? (
                  <Image
                    src={"https:" + a.fields.file.url}
                    alt=""
                    width="400"
                    height="300"
                  />
                ) : (
                  <div></div>
                )}
              </div>
            ))}
          </div>
          <div>
            {blogs.includes.Entry.map((entry: any) => (
              <div>
                {item.fields.creator.sys.id == entry.sys.id ? (
                  <div>Author: {entry.fields.name}</div>
                ) : (
                  <div></div>
                )}
              </div>
            ))}
          </div>
          <br />
          <br />
          <br />
        </>
      ))}
    </div>
  );
}
