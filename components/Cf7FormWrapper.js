'use client'

import React, { cloneElement, useState } from "react"

const JSONToFormData = (json) => {
    try {
        const data = new FormData()

        for (let k in json) {
            data.append(k, json[k])
        }

        return data
    } catch (error) {
        console.error(error)
        return null
    }
}

const ErrorMessage = () => {
    return (
        <div style={{ color: "red" }}>
            <strong>url</strong> or <strong>siteUrl</strong> and{" "}
            <strong>formId</strong> are mandatory attributes
        </div>
    )
}

const Cf7FormWrapper = ({ children, siteUrl, formId, url }) => {
    const [isSent, setSent] = useState(false)
    const [isLoading, setLoading] = useState(false)
    const [hasError, setError] = useState(null)
    const [message, setMessage] = useState(null)

    const apiUrl =
        url ||
        `${siteUrl}/wp-json/contact-form-7/v1/contact-forms/${formId}/feedback/`

    const formSubmitHandler = async (event, payload) => {
        event.preventDefault()

        setLoading(true)
        setError(null)

        const response = await fetch(apiUrl, {
            method: "POST",
            body: JSONToFormData(payload),
        })

        const data = await response.json()
            .then(data => {
                data.status === 'mail_sent' ? setSent(true) : setSent(false)
                setMessage(data.message)
            })
            .catch(e => {
                setError(e)
            }).finally(() => setLoading(false))



        // .then((resp) => resp.json())
        // .then((resp) => {
        //     if (resp.status !== "mail_sent") throw resp.message
        //     setSent(true)
        // })
        // .catch((error) => {
        //     setError(error)
        // })
        // .finally(() => {
        //     setLoading(false)
        // })
    }

    const Form = cloneElement(children, {
        handler: formSubmitHandler,
        isLoading,
        isSent,
        hasError,
        message
    })

    return <div>{url || (siteUrl && formId) ? Form : <ErrorMessage />}</div>
}

export default Cf7FormWrapper