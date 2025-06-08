"use client"

import { h1 } from "framer-motion/client"
import { Loader } from "@googlemaps/js-api-loader";
import React, { useEffect } from "react"

export function Map(){

    const mapRef = React.useRef<HTMLDivElement>(null);

    useEffect(() => {
        const initMap = async () => {
            
            const loader = new Loader({
                apiKey : process.env.NEXT_PUBLIC_MAPS_API_KEY as string,
                version: 'weekly'
            });

            const { Map } = await loader.importLibrary('maps');

            // init  a marker
            const { Marker } = await loader.importLibrary('marker') as google.maps.MarkerLibrary;
            
            const position = {
                lat : 3.157764,
                lng : 101.711861
            }

            //map options
            const mapOptions : google.maps.MapOptions = {
                center : position,
                mapTypeId: 'satellite',
                zoom : 17,
                mapId : 'MY_NEXTJS_MAPID'
            }

            // setup the map
            const map = new Map(mapRef.current as HTMLDivElement, mapOptions);

            // put up a marker
            const marker = new Marker ({
                map : map,
                position: position
            });

        }
        initMap();
    }, []);

    return (
        <div style={{height: '600px', width: '600px', borderRadius: '20px'}} ref={mapRef}/>
    )

}