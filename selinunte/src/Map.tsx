import React from 'react';
import './Map.css';

const Map: React.FC = () => {

    return (
        <div className="mapContainer">
            <h1>DOVE CI TROVIAMO?</h1>
            <iframe className="mappa" src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d12647.017523944!2d12.814381858791153!3d37.5844010525396!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x131a4ad55a26dee5%3A0x83cd35ff9e031c6e!2s91022%20Selinunte%20TP!5e0!3m2!1sit!2sit!4v1710405059220!5m2!1sit!2sit"
                width="100%"
                height={600}
                style={{ border: "0" }}
                allowFullScreen={true}
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade">
                </iframe>
        </div >
    )
}

export default Map