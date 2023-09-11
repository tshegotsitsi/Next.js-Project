import { useEffect, useState } from "react";

function LastSalesPage() {
    const [sales, setSales] = useState();
    const [isLoading, setIsLoading] =useState(false)


  useEffect(() => {
    fetch(
      "https://next-project-b070c-default-rtdb.firebaseio.com/sales.json"
    ).then((response) => response.json())
    .then(data => {

    });
  }, []);

  return <ul></ul>;
}

export default LastSalesPage;
