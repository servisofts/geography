import { SSocketProps } from 'servisofts-socket'
import { SThemeThemes } from 'servisofts-component'
const SThemeProps: SThemeThemes = {
    default: {
        barStyle: "dark-content",
        barColor: "#ffffff",
        primary: "#ffffff",
        secondary: "#000000",
        background: "#cccccc",
        card: "#00000066",

    },
    dark: {
        barStyle: "light-content",
        barColor: "#000000",
        primary: "#000000",
        secondary: "#ffffff",
        background: "#222222",
        card: "#00000066",
    }
}

const SocketProps: SSocketProps = {
    name: 'geography',
    host: 'geography.ss.lo',
    port: {
        native: 10027,
        web: 20027,
        http: 30027,
    },
    ssl: false,
    cert: "MIID2DCCAsCgAwIBAgIEYblJHjANBgkqhkiG9w0BAQsFADCBrTELMAkGA1UEBhMCQk8xEjAQBgNVBAgMCUF2IEJhbnplcjETMBEGA1UEBwwKU2FudGEgQ3J1ejEXMBUGA1UECgwOU2Vydmlzb2Z0cyBTUkwxEjAQBgNVBAsMCWdlb2dyYXBoeTEhMB8GA1UEAwwYZ2VvZ3JhcGh5LnNlcnZpc29mdHMuY29tMSUwIwYJKoZIhvcNAQkBFhZhbHZhcm9zaWxlczFAZ21haWwuY29tMB4XDTIxMTIxNTAxNDcxMFoXDTIxMTIxNjAxNDcxMFowga0xCzAJBgNVBAYTAkJPMRIwEAYDVQQIDAlBdiBCYW56ZXIxEzARBgNVBAcMClNhbnRhIENydXoxFzAVBgNVBAoMDlNlcnZpc29mdHMgU1JMMRIwEAYDVQQLDAlnZW9ncmFwaHkxITAfBgNVBAMMGGdlb2dyYXBoeS5zZXJ2aXNvZnRzLmNvbTElMCMGCSqGSIb3DQEJARYWYWx2YXJvc2lsZXMxQGdtYWlsLmNvbTCCASIwDQYJKoZIhvcNAQEBBQADggEPADCCAQoCggEBAMSbnkYyFDsOVIrokBSXS3G1jha7gtwJTN6wGphfky7EfPU+eJNJb6PJfomy5EaWv9dzh6AkJlIP6QlGP2DIx5ABe+tHmrHoLuIRhBcmXVclHptUWROPAbWMejE46KRBWG9ajb3vmP2TNwIKKZBtticXDpebN85ia2GyojWkyJ9z9VlT5JoA9MsCF93vaivojMkyA0PVdchWoErNWFaWWu/Ot+0yiV+8Q+bMd54fkG9UhxkFpsc6nZvUKPYIa9GhJc+aRng9F9FnZs+36Se3Wqnv8g9wXGV++eE8OXP+BOpwLYxApoCUSIv2O3O1Lho+MiXIX6u6e53fj/XM2qyuJz0CAwEAATANBgkqhkiG9w0BAQsFAAOCAQEAmKcr8eC7DasaQMS0ua/5IeM+V7e9OIdXRTmilSRZosrA21Q6EdlnTPNNUAhG6BXR4tyTG8SY2EUame1CgswnsmCpbKAdKL+DzMw2xkxrKVlFmG5pSpJfwh3AHb+Z07nDyI6hrjPiDnUEt7wujzxynhlxfw72+FeALI3erZkE2l3vDStNjZAV56lmt7FtLTTffGFq/z26DudHNPXVqxf3aSv1yaQjeaLD19gx+OU8fgT3TvpgLrWsfi4x7/VqquejXxeCiDfZWeF9c58I4W2G5jH4+aj8/wpYJoGCeFYrWmThLlCH66yb4jxvUjXzWoErjGD888DkLk0V0SmhCpFerQ==",
    apis: {
        servicio: "http://servicio.ss.lo/http/"
        // rp: "http://192.168.0.21:30016/"
    }
}
export default {
    SocketProps,
    SThemeProps
}