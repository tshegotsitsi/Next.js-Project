import path from "path";
import fs from "fs/promises";

import { Fragment } from "react";

function ProductDetailPage(props) {
        const { loadedProduct } =props;
  return (
    <Fragment>
      <h1>{loadedProduct.title}</h1>
      <P>{loadedProduct.description}</P>
    </Fragment>
  );
}

export async function getStaticProps(context) {
    const { params } = context;

    const productId = params.pid;

    const filePath = path.join(process.cwd(), "data", "dummy-backend.json");
    const jsonData = await fs.readFile(filePath);
    const data = JSON.parse(jsonData);

    const product = data.product.find(product => product.id === productId);

  return{
    props: {
        loadedProduct: product
    }
  };
}

export default ProductDetailPage;
