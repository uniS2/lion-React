import { getPbImageURL, numberWithComma } from "@/utils";

export default function ProductItem({ item}) {
  return (
    <li>
      <figure className="flex flex-col items-start">
        {/* http://127.0.0.1:8090/api/files/COLLECTION_ID_OR_NAME/RECORD_ID/FILENAME */}
        <img src={getPbImageURL(item, 'photo')} className="h-96 w-auto" alt="" />
        <figcaption className="flex flex-col">
          <span className="title">
            {item.title} [ {item.color} ]
          </span>
          <span className="price">KRW {numberWithComma(item.price)}</span>
        </figcaption>
      </figure>
    </li>
  )
}