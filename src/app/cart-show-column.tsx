import { Cart } from "@/my_types";
import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import axios from "axios";
import { TbBrandGoogle, TbBrandInstagram, TbWorld } from "react-icons/tb";

type OpeningHours = {
    openNow: boolean;
    periods: Array<{
        close: DayHours;
        open: DayHours;
    }>;
};
type DayHours = {
    date: {
        day: number;
        month: number;
        year: number;
    };
    day: number;
    hour: number;
    minute: number;
};

function CartShowColumn({ currentCart }: { currentCart: number; }) {
    const [currentOpeningHours, setCurrentOpeningHours] = useState<OpeningHours | null>(null);
    const [openNow, setOpenNow] = useState<boolean>(false);
    const [rating, setRating] = useState<number>(0);

    const cart: Cart = useSelector((state: any) => state.entities.carts[currentCart]);

    useEffect(() => {
        if (cart && cart.google_id) {
            axios({
                method: "GET",
                url: `https://places.googleapis.com/v1/places/${cart.google_id}?fields=currentOpeningHours,rating&key=AIzaSyBDK9J3nvSm2qCebFABANJBFs6CIw4k1k0`,
            })
                .then(data => {
                    setCurrentOpeningHours(() => data.data.currentOpeningHours);
                    setOpenNow(() => data.data.openNow);
                })
                .catch(data => console.log(data))
        }
    }, [cart]);

    function cartDisplay() {
        const { address, area_code, city, id, instagram, name, phone_number, state, status, website, zip_code } = cart;

        return (
            <>
                <h2>{name}</h2>
                {addressDisplay(address, city, state, zip_code)}
                <p>{phone_number && phoneDisplay(area_code, phone_number)}</p>
                {website && (
                    <a
                        href={website}
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        <TbWorld />
                    </a>
                )}
                <a
                    href={`https://www.google.com/search?q=${name} ${city}`}
                    target="_blank"
                    rel="noopener noreferrer"
                >
                        <TbBrandGoogle />
                </a>
                {instagram && (
                    <a
                        href={`https://www.instagram.com/${instagram}`}
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                            <TbBrandInstagram />
                    </a>
                )}
                <ul>
                    {currentOpeningHours && openingHoursDisplay(currentOpeningHours).map((hour: string) => <li>
                        {hour}
                    </li>)}
                </ul>
            </>
        );
    }

    function openingHoursDisplay(openingHours: OpeningHours) {
        const days: { [key: number]: string } = {
            0: 'Sunday',
            1: 'Monday',
            2: 'Tuesday',
            3: 'Wednesday',
            4: 'Thursday',
            5: 'Friday',
            6: 'Saturday'
        };
        const dayHours: { [key: number]: string } = getHours(openingHours.periods)
        const hoursDisplay: Array<string> = [];
        for (let i = 0; i < 7; i++) {
            const day: string = days[i];
            if (dayHours[i]) {
                hoursDisplay.push(`${day}: ${dayHours[i]}`);
            } else {
                hoursDisplay.push(`${day}: CLOSED`);
            }
        }

        return hoursDisplay;
    }

    function getHours(periods: Array<{ open: DayHours; close: DayHours }>) {
        const hours: { [key: number]: string } = [];
        for (let index of Object.keys(periods)) {
            const { open, close }: { open: DayHours; close: DayHours } = periods[parseInt(index)];
            const openingHour: string = formatHour(open);
            const closingHour: string = formatHour(close);
            hours[open.day] = `${openingHour} - ${closingHour}`;
        }

        return hours;
    }

    function formatHour(dayHours: DayHours) {
        let { hour, minute } = dayHours;
        let period: string = "AM";
        if (hour > 11) {
            hour -= 12;
            period = "PM";
        }
        if (hour === 0) {
            hour = 12;
        }

        return `${hour.toString().padStart(2, '0')}:${minute.toString().padStart(2, '0')} ${period}`;
    }

    function addressDisplay(address: string, city: string, state: string, zip_code: string) {
        return (
            <section>
                <p>{address}</p>
                <p>{`${city}, ${state} ${zip_code}`}</p>
            </section>
        );
    }

    function phoneDisplay(area_code: string, phone_number: string) {
        return `(${area_code}) ${phone_number.slice(0,3)}-${phone_number.slice(3)}`;
    }

    return (
        <section className='cart-show-column'>
            Cart show column
            {currentCart >= 0 && cartDisplay()}
        </section>
    );
}

export default CartShowColumn;