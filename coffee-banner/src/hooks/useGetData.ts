import { useState, useEffect, useContext } from 'react';
import axios from 'axios';
import { Coffee } from '../types/Coffee';
import { GetDataReturnType } from '../types/GetDataReturnType';
//import CryptoDTO from '../dto/CryptoDTO';
//import { GetDataReturnType } from '../types/returnTypes/GetDataReturnType';
//import { CryptoData } from '../types/CryptoData';

export default function useGetData(coffeType: string): GetDataReturnType {
  const [data, setData] = useState<Array<Coffee> | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const url = `https://api.sampleapis.com/coffee/${coffeType}`;

    axios
      .get(url)
      .then((res: any) => {
        console.log(res.data);
        const data = res.data as Array<Coffee>;
        setData(data);
        setLoading(false);
        setError(null);
        console.log('GetData successed!');
      })
      .catch((err: any) => {
        setData(null);
        setLoading(false);
        setError(err.message);
        console.log(err);
      });
  }, []);

  return { data, loading, error };
}
