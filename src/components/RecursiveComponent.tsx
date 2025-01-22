import { useEffect, useState } from "react";

const data = "This is a Recursive Component".split("");
const fetchData = async (
  index: number,
  increaseBy: number
): Promise<string[]> => {
  return new Promise((res) => {
    setTimeout(() => {
      res(data.slice(index * increaseBy, index * increaseBy + increaseBy));
    }, 50);
  });
};

export const RecursiveComponent = ({
  index = 0,
  increaseBy,
}: {
  index?: number;
  increaseBy: number;
}) => {
  const [data, setData] = useState<string[]>([]);

  useEffect(() => {
    fetchData(index, increaseBy).then((d) => setData(d));
  }, [increaseBy, index]);

  useEffect(() => {
    return () => setData([]);
  }, []);

  if (data.length < 1) {
    return null;
  }

  return (
    <>
      {data.map((v, idx) => (
        <span key={idx}>{v}</span>
      ))}
      <RecursiveComponent index={index + 1} increaseBy={increaseBy} />
    </>
  );
};
