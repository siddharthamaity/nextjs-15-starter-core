import { googleMapsLoader } from "./GoogleMapsLoader";

export async function fetchReviews(): Promise<google.maps.places.PlaceReview[]> {
    await googleMapsLoader.load();

    const { Map } = await googleMapsLoader.importLibrary('maps');

    return new Promise((resolve, reject) => {
        const fakeDiv = document.createElement('div');
        const map = new Map(fakeDiv);

        const service = new google.maps.places.PlacesService(map);
        const request = {
            placeId : 'ChIJH5xmLdE3zDERKa4a_IywVck',
            fields : ['review']
        };

        service.getDetails(request, (place, status) => {
            if(status == google.maps.places.PlacesServiceStatus.OK && place?.reviews){
                resolve(place.reviews);
            }else{
                reject('failed to load reviews');
            }
        })
    })

}