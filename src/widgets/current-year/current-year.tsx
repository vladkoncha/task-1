'use client';

import { useEffect, useState } from 'react';

import { Button } from '@/src/shared/ui/button';

import styles from './styles.module.scss';
import { TimeData } from './types';

export const CurrentYear = () => {
  const [year, setYear] = useState<number>(0);
  const [isFetching, setIsFetching] = useState(true);
  const [error, setError] = useState('');

  const fetchCurrentYear = async () => {
    setIsFetching(true);
    try {
      const timeResponse: Response = await fetch(
        'http://worldtimeapi.org/api/timezone/Europe/London'
      );
      const currentTime: TimeData = await timeResponse.json();
      setYear(new Date(currentTime.utc_datetime).getFullYear());
    } catch (e) {
      if (e instanceof Error) {
        setError(e.message);
      }
    } finally {
      setIsFetching(false);
    }
  };

  useEffect(() => {
    fetchCurrentYear();
  }, []);

  let yearText: string = '';
  if (isFetching) {
    yearText = 'Получаем данные...';
  } else if (error) {
    yearText = `Произошла ошибка при получении текущего года: ${error}`;
  } else {
    yearText = `Год: ${year}`;
  }

  return (
    <div className={styles['year-container']}>
      <p className={styles['year-text']}>{yearText}</p>

      <div className={styles['buttons-container']}>
        <Button
          kind={'primary'}
          onClick={() => setYear(year + 1)}
          disabled={isFetching}
        >
          +1 год
        </Button>
        <Button
          kind={'primary'}
          onClick={() => setYear(year - 1)}
          disabled={isFetching}
        >
          -1 год
        </Button>
        <Button
          kind={'secondary'}
          onClick={fetchCurrentYear}
          disabled={isFetching}
        >
          Обновить на текущий
        </Button>
      </div>
    </div>
  );
};
