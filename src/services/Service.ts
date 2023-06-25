export const QRCode = (str: string) => {
    return fetch("http://localhost:8080/qr", {
        method: "post",
        body: JSON.stringify(str)
    });
};

export const Email = (email: string, body: string) => {
    return fetch(`http://localhost:8080/mail?email=${email}`, {
        method: "post",
        body: JSON.stringify(body)
    });
};

export const buttonStyle = () => {
    return {
        padding: "4px",
        margin: "2px",
        backgroundColor: "black",
        ":hover": {
            backgroundColor: "grey",
            color: "white"
        },
        fontFamily: "MedievalSharp"
    }
}

export const inputStyle = () => {
    return {
        color: "white",
        ":hover": {
            borderColor: "grey",
        },
        fontFamily: "MedievalSharp"
    }
}