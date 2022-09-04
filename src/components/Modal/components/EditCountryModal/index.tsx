/* eslint-disable @typescript-eslint/no-explicit-any */
import CloseIcon from '@mui/icons-material/Close'
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown'
import PriorityHighRoundedIcon from '@mui/icons-material/PriorityHighRounded'
import { ChangeEvent, useLayoutEffect, useRef, useState } from 'react'
import { useForm } from 'react-hook-form'

import * as S from './styles'

import { useStoreDispatch } from 'hooks/useStoreDispatch'
import { tripAPI } from 'services/trip'
import { closeModal } from 'store/ui'

type FormData = {
  country: string
  photo: any
}

export const EditCountry = () => {
  const [countries, setCountries] = useState<string[]>([])
  const [photo, setPhoto] = useState<any>()
  const [image, setImage] = useState<any>()

  const inputRef = useRef<any>()

  const { data: getCountriesData } = tripAPI.useGetCountriesQuery()
  const [updateTripPhoto] = tripAPI.useCreateTripPhotoMutation()

  const dispatch = useStoreDispatch()

  useLayoutEffect(() => {
    if (getCountriesData) setCountries(getCountriesData.countries)
  }, [getCountriesData])

  const {
    register,
    formState: { errors },
    getValues,
    handleSubmit,
    setValue,
    watch,
  } = useForm<FormData>({
    defaultValues: {
      country: '',
      photo: null,
    },
  })

  const value = getValues()

  const handleUploadPhoto = async (e: ChangeEvent<HTMLInputElement>) => {
    e.preventDefault()

    const formData = new FormData()

    if (e.target.files) {
      formData.append('photo', e.target.files[0])
    }

    if (e.currentTarget) {
      setPhoto(e.currentTarget.files![0])
      setImage(URL.createObjectURL(e.currentTarget.files![0]))
      setValue('photo', formData)
    }
  }

  const Submit = async () => {
    try {
      await updateTripPhoto({
        photo: getValues('photo'),
        countryName: getValues('country'),
      })
      dispatch(closeModal())
      setPhoto(null)
      setImage(null)
      getValues('photo')
    } catch (e) {
      console.log(e)
    }
  }

  const handleCloseModal = () => {
    dispatch(closeModal())
  }

  watch()

  if (countries)
    return (
      <S.EditCountryModal>
        <S.EditCountryModalInner>
          <S.EditCountryTop>
            <S.EditCountryModalTitle>Редагування</S.EditCountryModalTitle>
            <S.EditCountryModalClose onClick={handleCloseModal}>
              <CloseIcon fontSize='large' />
            </S.EditCountryModalClose>
          </S.EditCountryTop>
          <S.EditCountryForm onSubmit={handleSubmit(Submit)}>
            <S.EditCountry>
              <S.EditCountryLabel>Країна</S.EditCountryLabel>
              <KeyboardArrowDownIcon />
              <S.EditCountrySelect {...register('country', { required: true })}>
                {!value.country && (
                  <S.EditCountryOptionNotSelected value='' disabled>
                    Виберіть
                  </S.EditCountryOptionNotSelected>
                )}
                {countries.map((destination) => {
                  return (
                    <S.EditCountryOption key={destination} value={destination}>
                      {destination}
                    </S.EditCountryOption>
                  )
                })}
              </S.EditCountrySelect>
              {errors.country && (
                <S.EditCountryError>
                  <PriorityHighRoundedIcon fontSize='small' />
                </S.EditCountryError>
              )}
            </S.EditCountry>
            <S.EditCountryPhoto>
              <S.EditCountryInput
                type='file'
                accept='image/*'
                {...register('photo', { required: true })}
                ref={inputRef}
                hidden
                onChange={handleUploadPhoto}
              />
              {photo && image && (
                <S.PhotoInner>
                  <S.Image src={image} alt={photo.name} />
                  <S.Label>{photo.name}</S.Label>
                </S.PhotoInner>
              )}

              <S.EditCountrySubmitPhoto
                onClick={(e) => {
                  e.preventDefault()
                  inputRef.current.click()
                }}
                disabled={!value.country}
              >
                Завантажити фото
              </S.EditCountrySubmitPhoto>
              {photo && image && (
                <S.FormSubmit>
                  <S.FormButtonSubmit type='submit'>Зберегти</S.FormButtonSubmit>
                </S.FormSubmit>
              )}
            </S.EditCountryPhoto>
          </S.EditCountryForm>
        </S.EditCountryModalInner>
      </S.EditCountryModal>
    )

  return null
}
