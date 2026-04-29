const API = "http://localhost:3000";

export async function api(path, options = {}) {
    const token = localStorage.getItem("token");

    const res = await fetch(`${API}${path}`, {
        // dá spread nas opções recebidas (aqui pode vir o método e o body)
        ...options,
        // informações enviadas ao servidor
        headers: {
            "Content-Type": "application/json", // dados enviados em JSON
            Authorization: token ? `Bearer ${token}` : "" // envia o token de autorização, se existir, se não, envia vazio
        }
    });

    return res.json();
}