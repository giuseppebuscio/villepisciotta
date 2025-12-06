# Guida al Deployment - Ville Pisciotta

## Problema 404 con React Router

Quando si usa React Router con routing client-side, è necessario configurare il server per servire sempre `index.html` per tutte le route che non sono file statici. Questo permette a React Router di gestire il routing lato client.

## Soluzioni per Provider di Hosting

### 1. Apache (.htaccess)
Il file `.htaccess` è già stato creato nella cartella `public/` e verrà copiato automaticamente nella cartella `dist/` durante il build.

**Verifica**: Assicurati che il file `.htaccess` sia presente nella root del sito dopo il deploy.

### 2. Netlify (_redirects)
Il file `_redirects` è già stato creato nella cartella `public/` e verrà copiato automaticamente.

**Configurazione Netlify**:
- Build command: `npm run build`
- Publish directory: `dist`
- Il file `_redirects` verrà automaticamente riconosciuto

### 3. Vercel (vercel.json)
Il file `vercel.json` è già stato creato nella root del progetto.

**Configurazione Vercel**:
- Build command: `npm run build`
- Output directory: `dist`
- Il file `vercel.json` verrà automaticamente riconosciuto

### 4. Nginx
Se usi Nginx, copia il contenuto del file `nginx.conf` nella configurazione del tuo server.

**Esempio di configurazione**:
```nginx
location / {
    try_files $uri $uri/ /index.html;
}
```

### 5. Cloudflare Pages
Cloudflare Pages supporta automaticamente il routing SPA. Assicurati solo che:
- Build command: `npm run build`
- Build output directory: `dist`

### 6. Aruba / Hosting Condiviso
Se usi Aruba o un hosting condiviso con Apache:
1. Assicurati che il file `.htaccess` sia nella root del sito
2. Verifica che mod_rewrite sia abilitato sul server
3. Se necessario, contatta il supporto per abilitare mod_rewrite

## Verifica del Deploy

Dopo il deploy, verifica che:

1. ✅ La homepage funzioni: `https://www.villepisciotta.com/`
2. ✅ Le route funzionino direttamente: `https://www.villepisciotta.com/villa-mirascopello`
3. ✅ Il refresh della pagina funzioni senza errori 404
4. ✅ I file statici (immagini, CSS, JS) vengano serviti correttamente

## Test Locale

Per testare il build localmente:
```bash
npm run build
npm run preview
```

Poi prova ad accedere direttamente a `http://localhost:4173/villa-mirascopello` per verificare che il routing funzioni.

## Troubleshooting

### Errore 404 persistente
1. Verifica che il file di configurazione appropriato sia presente nella root del sito deployato
2. Controlla i log del server per errori
3. Assicurati che mod_rewrite sia abilitato (per Apache)
4. Verifica che il file `.htaccess` non sia bloccato dal server

### File statici non caricati
1. Verifica che i percorsi delle risorse siano relativi (iniziano con `/`)
2. Controlla che i file nella cartella `public/` siano stati copiati correttamente

### Routing non funziona
1. Verifica che React Router sia configurato correttamente
2. Controlla che il componente `ScrollToTop` sia presente in `App.jsx`
3. Assicurati che tutte le route siano definite in `App.jsx`

