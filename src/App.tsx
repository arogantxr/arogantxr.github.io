import { useEffect, useState } from "react";

type User = {
    displayName: string;
    photos?: { value: string }[];
};

function App() {
    const [user, setUser] = useState<User | null>(null);

    useEffect(() => {
        fetch("http://localhost:3000/api/me", { credentials: "include" })
            .then(res => res.json())
            .then(data => {
                if (!data.error) setUser(data);
            });
    }, []);

    return (
        <div id="wrapper">
            {user ? (
                <>
                    <h2>Willkommen, {user.displayName}</h2>
                    {user.photos?.[0]?.value && (
                        <img id="avatar" src={user.photos[0].value} alt="Profil" />
                    )}
                </>
            ) : (
                <button
                    id="signUp"
                    onClick={() => (window.location.href = "http://localhost:3000/auth/google")}
                >
                    Mit Google anmelden
                </button>
            )}
        </div>
    );
}

export default App;
