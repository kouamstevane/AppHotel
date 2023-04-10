import{ Component } from '@angular/core';

@Component({
    selector: 'app-hotel-list',
    templateUrl: './hotel-list.component.html'
})
export class HotelListComponent {
    public filterHotel:string='mot';
    public showBadge: boolean;
    public hotels: any[] = [
        {
            hotelName: 'Residence L\'oceane',
            hotelDescription: 'hotel a chambre quadrature',
            hotelPrice: '996.33',
            imageUrl: '../../../assets/hotel1.jpg'
        },
        {
            hotelName: 'Tara Plage',
            hotelDescription: 'Chambre Simple et propre, cet hotel est situe sur une belle et calme plage pres des cascades de Lobe',
            hotelPrice: '266.57',
            imageUrl: '../../../assets/hotel2.jpg'
        },
        {
            hotelName: 'Residence SVET',
            hotelDescription: 'Grande Chambre de luxe avec double lit tres confortable',
            hotelPrice: '344',
            imageUrl: '../../../assets/hotel3.jpg'
        },
        {
            hotelName: 'Ibis Douala',
            hotelDescription: 'Chambre de luxe avec petit dejeuner inclus',
            hotelPrice: '872.8',
            imageUrl: '../../../assets/hotel4.jpg'
        },
        {
            hotelName: 'La Megane',
            hotelDescription: 'Chambre de luxe contenant 2 lits tres confortable',
            hotelPrice: '7072.8',
            imageUrl: '../../../assets/hotel5.jpg'
        },
        {
            hotelName: 'La Megane',
            hotelDescription: 'Chambre de luxe contenant 2 lits tres confortable',
            hotelPrice: '8562',
            imageUrl: '../../../assets/hotel6.jpg'
        },
    ];

    public inverseShowBadge() {
        this.showBadge = !this.showBadge;
    }
}