'use client';

import { yupResolver } from '@hookform/resolvers/yup';
import { useState } from 'react';
import { useForm } from 'react-hook-form';

import { Button } from '@/src/shared/ui/button';
import { ErrorMessage } from '@/src/shared/ui/error-message';
import { Input } from '@/src/shared/ui/input';
import { TextArea } from '@/src/shared/ui/text-area';

import { MAX_BIO_LENGTH, schema } from './schema';
import styles from './styles.module.scss';
import { FormInputs } from './types';

export const Form = () => {
  const [validData, setValidData] = useState<FormInputs | null>(null);

  const {
    watch,
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormInputs>({
    resolver: yupResolver(schema),
  });

  const onSubmit = (data: FormInputs) => {
    setValidData(data);
    console.log(data);
  };

  return (
    <>
      <form
        onSubmit={handleSubmit(onSubmit)}
        className={styles['form-container']}
      >
        <Input
          label="Имя"
          {...register('name')}
          type="text"
          placeholder="Иван"
        />
        <ErrorMessage>{errors.name?.message}</ErrorMessage>

        <Input
          label="Возраст"
          {...register('age')}
          type="number"
          placeholder="10"
        />
        <ErrorMessage>{errors.age?.message}</ErrorMessage>

        <TextArea
          {...register('bio')}
          label="Статус"
          areaValue={watch('bio')}
          placeholder="[Нет статуса]"
          maxLength={MAX_BIO_LENGTH}
        />
        <ErrorMessage>{errors.bio?.message}</ErrorMessage>

        <div className={styles['button-container']}>
          <Button type="submit" kind="primary">
            Сохранить
          </Button>
        </div>
      </form>
      {validData && (
        <div className={styles['data-container']}>
          <p>Имя: {validData?.name}</p>
          <p>Возраст: {validData?.age}</p>
          {validData?.bio && <p>Статус: {validData?.bio}</p>}
        </div>
      )}
    </>
  );
};
