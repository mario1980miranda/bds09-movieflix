import { useEffect, useState } from 'react';
import { Controller, useForm } from 'react-hook-form';
import { Genre } from 'types/genre';
import { requestBackend } from 'util/requests';
import Select from 'react-select';

import './styles.css';

export type GenreFilterData = {
  genre: Genre | null;
};

type Props = {
  onSubmitFilter: (data: GenreFilterData) => void;
};

const GenreFilter = ({ onSubmitFilter }: Props) => {
  const [selectGenres, setSelectGenres] = useState<Genre[]>();

  const { setValue, getValues, control } = useForm<GenreFilterData>();

  const handleChangeGenre = (value: Genre) => {
    console.log('ENVIOU', value);

    setValue('genre', value);

    const obj: GenreFilterData = {
      genre: getValues('genre'),
    };

    onSubmitFilter(obj);
  };

  useEffect(() => {
    requestBackend({ url: '/genres', withCredentials: true }).then(
      (response) => {
        setSelectGenres(response.data);
      }
    );
  }, [setValue]);

  return (
    <div className="base-card genre-filter-select-card">
      <Controller
        name="genre"
        control={control}
        render={({ field }) => (
          <Select
            {...field}
            options={selectGenres}
            classNamePrefix="genre-filter-select-component"
            placeholder="Generos"
            isClearable
            onChange={(value) => handleChangeGenre(value as Genre)}
            getOptionLabel={(genre: Genre) => genre.name}
            getOptionValue={(genre: Genre) => String(genre.id)}
          />
        )}
      />
    </div>
  );
};

export default GenreFilter;
