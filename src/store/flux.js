const getState = ({ getStore, getActions, setStore }) => {
    return{
        store: {
            mode: 'live',
            access_key: '01fd025e4db293f0f564285774233e3f',
            currency: 'CLP, COP, ARS, MXN, PYG',
            source: 'USD',
            format: 1,
            result: null,
            isLoaded: false,
        },
        actions: {
            getCurrency: () => {
                const store = getStore();
                fetch(store.mode+'?access_key='+store.access_key+'&currencies='+store.currency+'&source='+store.source+'&format='+store.format, {
                    method: 'GET',
                    headers: {
                        'Content-Type': 'application/json',
                    }
                })
                .then(resp => resp.json())
                .then(data => {
                    console.log(data)
                    setStore({
                        result: data,
                        isLoaded: true
                    })
                })

                },

            }
        }
    }
export default getState;