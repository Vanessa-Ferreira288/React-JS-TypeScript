import React, { useState, useEffect } from "react"

function ExemploLimpeza() {
    const [online, setOnline] =  useState(navigator.onLine)

    useEffect(() => {
        const handleStatusChange = () => {
            setOnline(navigation.online)
        }

        window.addEventListener("online", handleStatusChange)
        window.addEventListener("offline", handleStatusChange)

        return () => {
            window.removeEventListener("online", handleStatusChange)
            window.removeEventListener("offline", handleStatusChange)
        }
    }, []);
    
    return <div>Status: {online ? "Online" : "Offline"}</div>

}

export default ExemploLimpeza;