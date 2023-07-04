import clsx from 'clsx';
import Image from 'next/image';
import { useState } from 'react';
import { useForm } from 'react-hook-form';

function PostVehicules() {
  // state
  const {
    handleSubmit,
    register,
    formState: { errors },
    watch,
  } = useForm();
  const [selectImage, setSelectedImage] = useState();
  const [selectedFile, setSelectedFile] = useState();
  // event
  const selectFiles = ({ target }) => {
    const files = target.files;
    if (files) {
      let images = [];
      //   let fileSend = [];
      try {
        for (const key in files) {
          images.push(URL.createObjectURL(files[key]));
        }
      } catch (error) {
        console.log(error.message);
      }
      setSelectedImage(images);
    }
  };

  // rendu
  return (
    <>
      <form
        onSubmit={handleSubmit((data) => console.log(data))}
        className=''>
        {/* selection des images */}
        <label htmlFor='file'>
          <input
            id='file'
            onChange={selectFiles}
            type='file'
            hidden
          />
          <div
            className={clsx(
              'w-40',
              'aspect-video',
              'rounded',
              'flex',
              'items-center',
              'justify-center',
              'border-2',
              'border-dashed',
              'cursor-pointer'
            )}>
            {selectImage ? (
              <div className='relative w-full h-full '>
                <Image alt='' fill src={selectImage} />
              </div>
            ) : (
              <span>Select Image</span>
            )}
          </div>
        </label>
        {/* selection des images */}
        <div
          className={clsx(
            'h-full',
            'grid',
            'grid-cols-2',
            'content-center',
            'place-items-center',
            'gap-5 '
          )}>
          <input
            type='text'
            {...register('name')}
            placeholder='Entez la marque du véhicule'
            className={clsx(
              'input',
              'input-bordered',
              'input-info',
              'w-full',
              'max-w-xs'
            )}
          />
          <input
            type='text'
            placeholder='Entez le model du véhicule'
            className={clsx(
              'input',
              'input-bordered',
              'input-info',
              'w-full',
              'max-w-xs'
            )}
          />
          <select className='select select-info w-full max-w-xs'>
            <option disabled selected>
              Choisir le type de véhicule
            </option>
            <option>SUV</option>
            <option>Berlin</option>
            <option>4*4</option>
          </select>
          <input
            type='text'
            placeholder="Entez l'année"
            className={clsx(
              'input',
              'input-bordered',
              'input-info',
              'w-full',
              'max-w-xs'
            )}
          />
          <input
            type='text'
            placeholder='Entez le prix'
            className={clsx(
              'input',
              'input-bordered',
              'input-info',
              'w-full',
              'max-w-xs'
            )}
          />
          <input
            type='text'
            placeholder='Nom du vendeur'
            className={clsx(
              'input',
              'input-bordered',
              'input-info',
              'w-full',
              'max-w-xs'
            )}
          />
          <input
            type='text'
            placeholder='Numéro de telephone'
            className={clsx(
              'input',
              'input-bordered',
              'input-info',
              'w-full',
              'max-w-xs'
            )}
          />
          <select className='select select-info w-full max-w-xs'>
            <option disabled selected>
              Selection du type de carburant
            </option>
            <option value='gasoil'>gasoil</option>
            <option value='essence'>essence</option>
            <option value='élèctrique'>élèctrique</option>
          </select>
          <select className='select select-info w-full max-w-xs'>
            <option disabled selected>
              Selection de la transmission
            </option>
            <option value='manuelle'>manuelle</option>
            <option value='automatique'>automatique</option>
          </select>
          <select className='select select-info w-full max-w-xs'>
            <option disabled selected>
              Choisir le service
            </option>
            <option>Vente</option>
            <option>Location</option>
          </select>

          <button className='btn btn-success' type='submit'>
            Poster
          </button>
        </div>
      </form>
    </>
  );
}

export default PostVehicules;
