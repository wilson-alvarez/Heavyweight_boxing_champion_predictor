const num = Math.floor(Math.random() * 3);

const mixer = () => {
    switch (num) {
        case 0:
            document.write('<div style=“background-color: #66BFBF;”><img src="https://e0.365dm.com/18/07/2048x1152/skysports-oleksandr-usyk-usyk_4374791.jpg" style="width: 32%;display: block;margin-left: auto;margin-right: auto;"><br><h1 style="text-align: center;">Usyk is now the best heavyweight in the world</h1></div>');
            break;
        case 1:
            document.write('<div style=“background-color: #66BFBF;”><img src="https://images.daznservices.com/di/library/DAZN_News/ce/ae/tyson-fury-121619-getty-ftr_lr2bsfqt6v4p1g3ce1f26t4sz.jpg?t=332072159&quality=60&w=1280&h=720" style="width: 32%;display: block;margin-left: auto;margin-right: auto;"><br><h1 style="text-align: center;">Tyson Fury is still the number one heavyweight in the world, Big dosser!</h1></div>');
            break;
        case 2:
            document.write('<div style=“background-color: #66BFBF;”><img src="https://images.daznservices.com/di/library/sporting_news/ce/a9/deontay-wilder-061521-getty-ftr_10tn1rltydlnc1ayld51xi20sm.jpg?t=378152394&quality=100" style="width: 32%;display: block;margin-left: auto;margin-right: auto;"><br><h1 style="text-align: center;">Wilder is the baddest man of the planet, no discussion!</h1></div>');
    }
}
console.log(mixer());

