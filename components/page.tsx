async function getPage(id: any) {
    let res = await fetch(`https://api.starlynthrillingadventures.com/wp-json/wp/v2/pages/${id}?_fields=acf&acf_format=standard`)

    if (!res.ok) {
        throw new Error('Failed to fetch data');
    }
    const data = await res.json()

    return data
}

async function getExperience(id: any) {
    let res = await fetch(`https://api.starlynthrillingadventures.com/wp-json/wp/v2/experience/${id}?_fields=acf&acf_format=standard`)

    if (!res.ok) {
        throw new Error('Failed to fetch data');
    }

    return res.json()
}

async function getExperiences() {
    let res = await fetch(`https://api.starlynthrillingadventures.com/wp-json/wp/v2/experience?_fields=acf&acf_format=standard`)

    if (!res.ok) {
        throw new Error('Failed to fetch data');
    }

    return res.json()
}

export { getPage, getExperience, getExperiences }