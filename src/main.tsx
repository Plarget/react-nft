import { createRoot } from 'react-dom/client'
import App from "@/app/App.tsx";
import 'virtual:svg-icons-register'

createRoot(document.getElementById('root')!).render(
    <App />
)
