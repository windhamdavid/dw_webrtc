## Talky.WebRTC

Video / Chat / Screensharing   
- quick webrtc setup  
- added htaccess to protect client portals 
- moved css for customization 
- added ENV to pull API key 
- replaced [https://github.com/windhamdavid/webrtc](https://github.com/windhamdavid/webrtc)  

Fork @ [simplewebrtc/simplewebrtc-talky-sample-app](https://github.com/simplewebrtc/simplewebrtc-talky-sample-app)  

---
### API

Edit `YOUR_API_KEY`in `public/index.html`  
Talky API -  [https://accounts.simplewebrtc.com](https://accounts.simplewebrtc.com)  
Edit .env.demo  
`mv .env.demo .env`

### Run

- `npm install`
- `npm start`
- [https://localhost:8080/](https://localhost:8080)

### Deploy

- `npm install`
- `npm run build`
- move `./dist` to host.
- serve via HTTPS.

