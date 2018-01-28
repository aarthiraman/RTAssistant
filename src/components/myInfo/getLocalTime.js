import format from 'date-fns/format';
import add_hours from 'date-fns/add_hours';

export function getLocalTime() {
    const date = new Date();
    return  format(
        new Date(),
        'h:mm A'
      )
}

export function  ISTTime() {
    const date = new Date();
    return  format(
        add_hours(date, -5.5),
        'h:mm A'
      )
}

export function getGreetings() {
    const currentHour = new Date().getHours();

    if(currentHour < 11) {
        return 'Good Morning'
    } else if(currentHour < 15) {
        return 'Good afternoon'
    } else if(currentHour < 19) {
        return 'Good Evening'
    } 

    return 'Good Night';
}