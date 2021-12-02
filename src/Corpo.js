import Esquerda from "./corpo/Esquerda"
import Sidebar from "./corpo/Sidebar"

export default function Corpo() {
    return (
        <div class="corpo">
            <Esquerda />
            <Sidebar />
        </div>
    )
}