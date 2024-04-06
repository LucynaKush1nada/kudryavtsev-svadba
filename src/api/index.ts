interface InviteDataProps {
    firstName: string,
    lastName: string,
    phoneNumber: string,
    travelMethod: string,
    guessDrinks: string[],
    twoDaysReady: boolean | null
}

export const submitData = (data: InviteDataProps) => {
    return fetch('http://185.104.113.173:80/api/v1/invite', {
        method: "post",
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(data)
    });
}