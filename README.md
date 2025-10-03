Reproduction Instructions

run `npm i && npm run dev` to install deps and run the app
visit the page with a URL param, eg http://localhost:4321/?foo=bar

note that the console logs the correct URL with the param   
note that the anchor href attribute does not include the param  

note that if you change the Welcome component to `client:only` it applies the params correctly  
note that if you uncomment the div rendering the href within the component, it also applies the params correctly  

> it kind of seems like react doesn't detect that the JSX has changed if only URL params are added to the href  