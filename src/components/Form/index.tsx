import React, { useEffect } from 'react'
import { SubmitHandler, useForm } from 'react-hook-form'
import { Form, FormGroup, Input, Label, SubmitButton } from './styles'
import { NAME, SAVE } from '../../assets/strings'
import { Button } from 'components/Button'
import { post } from 'src/assets/fetch'

type FormValues = {
    name: string
    source: string
    groups: string
    channels: string
}

const ProviderForm: React.FC = () => {
    const { register, handleSubmit } = useForm<FormValues>()
    const onSubmit: SubmitHandler<FormValues> = (data) => console.log(data)

    useEffect(() => {
        ;async () => await post('/', {}, {})
    }, [])

    return (
        <Form onSubmit={handleSubmit(onSubmit)}>
            <FormGroup>
                <Label>{NAME}</Label>
                <Input {...register('name')} />
            </FormGroup>
            <FormGroup>
                <Label>M3U</Label>
                <Input {...register('source')} />
            </FormGroup>
            <Button loading={false}>{SAVE}</Button>
        </Form>
    )
}

export default ProviderForm
