import React, { useState } from "react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle
} from "@/components/ui/card";

type TProduct = {
  id: number;
  name: string;
  price: number;
  emoji: string;
  quantity: number;
  numberInStock: number;
};

interface IProducts {
  products: TProduct[];
}

export default function DerivedStates() {
  const [productsData, setProductsData] = useState<IProducts>({
    products: [
      {
        id: 1,
        name: "apple",
        price: 10,
        emoji: "🍏",
        quantity: 0,
        numberInStock: 10
      },
      {
        id: 2,
        name: "grapes",
        price: 20,
        emoji: "🍇",
        quantity: 0,
        numberInStock: 10
      },
      {
        id: 3,
        name: "banana",
        price: 30,
        emoji: "🍌",
        quantity: 0,
        numberInStock: 10
      },
      {
        id: 4,
        name: "watermelon",
        price: 40,
        emoji: "🍉",
        quantity: 0,
        numberInStock: 1
      }
    ]
  });
  const [selectedId, setSelectedId] = useState<number | null>(null);

  const selectedProduct = productsData.products.find(
    (p) => p.id === selectedId
  );

  // Increase the quantity of a product by 1
  const handleIncreaseProduct = (name: string) => {
    setProductsData((prev) => ({
      products: prev.products.map((product) => {
        if (product.name === name && product.numberInStock > product.quantity) {
          return { ...product, quantity: product.quantity + 1 };
        } else return product;
      })
    }));
  };
  // Decrease the quantity of a product by 1
  const handleDecreaseProduct = (name: string) => {
    setProductsData((prev) => ({
      products: prev.products.map((product) => {
        if (
          product.name === name &&
          product.quantity > 0 &&
          product.numberInStock >= product.quantity
        ) {
          return { ...product, quantity: product.quantity - 1 };
        } else {
          return product;
        }
      })
    }));
  };

  const handleChoose = (id: number) => {
    setSelectedId(id);
  };
  console.table(productsData);

  return (
    <Card className="bg-muted">
      <CardHeader>
        <CardTitle>Derived States</CardTitle>
        <CardDescription>
          V React, "derived states" jsou stavy, které jsou odvozeny (vypočítány)
          z jiných stavů nebo propojení komponent. Toto jsou obvykle vnitřní
          stavy komponenty, které nejsou přímo nastaveny pomocí setState(), ale
          jsou vypočítány na základě jiných stavů nebo vstupů. Používají se,
          když potřebujete provádět výpočty nebo transformace na základě
          aktuálního stavu a použít je k renderování komponenty. Tím se
          zajišťuje, že komponenta zůstává v synchronizaci s daty a změnami v
          aplikaci.🕳️ V širším kontextu programování mohou "derived states"
          znamenat jakékoli stavy nebo hodnoty, které jsou vypočítány nebo
          odvozeny z jiných dat nebo proměnných. Toto se používá k tomu, aby se
          programový kód zjednodušil a aby bylo možné efektivněji pracovat s
          daty. Například můžete vytvořit proměnnou celkem na základě dvou
          jiných proměnných a a b pomocí výrazu celkem = a + b. celkem je
          odvozený stav.
        </CardDescription>
      </CardHeader>
      <CardContent>
        <div className="md:grid md:grid-cols-2 gap-4 flex flex-col ">
          {productsData.products.map((product) => (
            <div className="my-4" key={product.id}>
              <Card className="max-w-xs m-auto" key={product.id}>
                <h3 className="text-3xl  my-2 text-center uppercase">
                  {product.name}
                </h3>
                <p className="text-md text-center  my-2  text-muted-foreground">
                  Number in The Stock {product.numberInStock}
                </p>
                <div className="flex justify-center items-center ">
                  <div className="flex gap-12">
                    <Button
                      onClick={() => handleDecreaseProduct(product.name)}
                      className="text-2xl"
                    >
                      -
                    </Button>
                    <span className="text-4xl">{product.quantity}</span>
                    <Button
                      onClick={() => handleIncreaseProduct(product.name)}
                      className="text-2xl"
                    >
                      +
                    </Button>
                  </div>
                </div>
                <div className=" my-6 flex justify-center items-center ">
                  <Button onClick={() => handleChoose(product.id)}>
                    {product.emoji} Choose
                  </Button>
                </div>
              </Card>
            </div>
          ))}
        </div>
      </CardContent>
      <CardFooter>
        <h2 className="text-3xl font-bold uppercase text-center">
          Selected Product
        </h2>
        <div className="flex flex-col gap-3 justify-between m-auto">
          <p className="text-xl font-bold uppercase">{selectedProduct?.name}</p>
          <p className="text-xl font-bold uppercase">
            {selectedProduct?.quantity}
          </p>
        </div>
      </CardFooter>
    </Card>
  );
}
