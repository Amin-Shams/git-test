const isLogin = (user) => {
    if (user) {
        return true;
    } else {
        return false;
    }
};

const hasAccess = (user) => {
    return true;
};

for (let i = 0; i < 10; i++) {
    console.log("salam");
}
