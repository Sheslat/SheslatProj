import axios from 'axios';

// Crear una instancia de Axios
const axiosInstance = axios.create({
  baseURL: 'http://localhost:8080', // Cambia esto por la URL base de tu API
  timeout: 10000, // Tiempo de espera para las solicitudes
});

// Interceptor de solicitud
// axiosInstance.interceptors.request.use(
//   (config) => {
//     // Agregar headers o modificar la configuración aquí
//     const token = localStorage.getItem('token'); // Por ejemplo, obtener un token de localStorage
//     if (token) {
//       config.headers.Authorization = `Bearer ${token}`;
//     }
//     return config;
//   },
//   (error) => {
//     return Promise.reject(error);
//   }
// );

// Interceptor de respuesta
axiosInstance.interceptors.response.use(
  (response) => {
    // Manejar respuestas exitosas
    return response.data; // Retornar solo los datos
  },
  (error) => {
    // Manejar errores
    if (error.response) {
      // La solicitud se realizó y el servidor respondió con un código de estado
      console.error('Error:', error.response.status, error.response.data);
    } else {
      // La solicitud se realizó pero no se recibió respuesta
      console.error('Error de red:', error.message);
    }
    return Promise.reject(error);
  }
);

// Funciones de utilidad para realizar peticiones
const httpService = {
  get: (url, config = null) => axiosInstance.get(url, config),
  post: (url, data, config = null) => axiosInstance.post(url, data, config),
  put: (url, data, config = null) => axiosInstance.put(url, data, config),
  delete: (url, config = null) => axiosInstance.delete(url, config),
};

export default httpService;
