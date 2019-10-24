const urlPrefix = 'https://ancient-journey-38675.herokuapp.com/combinacoes3?';
const urlList = 'lista=';
const urlSize = 'tamanho=';
const urlFixedList = 'fixo=';
const urlOVR = 'ovr=';

const createURL = ([...args], size, [...fixed], ovr) => {
    let urlFinal = urlPrefix;
    for(let i = 0; i < args.length; i++) {
        urlFinal = urlFinal + urlList + args[i] + '&';
    }
    urlFinal = urlFinal + urlSize + size + '&';
    for(let i = 0; i < fixed.length; i++) {
        urlFinal = urlFinal + urlFixedList + fixed[i] + '&';
    }
    urlFinal = urlFinal + urlOVR + ovr;

    return urlFinal;
}

export default createURL;