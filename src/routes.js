import home from "./Components/Home.vue";
import login from "./Components/Login.vue";
import registro from "./Components/Registro.vue";
import Dashboard from './Components/UserDashboard';
import AdminDashboard from './Components/AdminDashboard';
import tareas from './Components/Tareas.vue';
import contenidoTarea from './Components/ContenidoTarea.vue';
export const routes = [
    {
        path: "/",
        component: home,
        name: home,
        meta: {
            auth: undefined
        }
    },
    {
        path: "/login", 
        component: login,
        meta: {
            auth: false
        }
    },
    {
        path: "/registro", 
        component: registro,
        meta: {
            auth: false
        }
    },
    {
        path: "/tareas",
        component: tareas,
        auth: true,
        children: [
            {path: 'contenidoTarea', component: contenidoTarea }
        ]
    }
 
];