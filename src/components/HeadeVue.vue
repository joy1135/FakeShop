<template>
<div class="header">
    <div class="header__container container">
        <img src="../assets/header/logo.png" alt="" class="header__logo">
        <nav class="header__menu">
            <ul class="header__menu-list">
                <li class="menu__item">
                    <router-link to="/">
                        <a href="" class="menu__link">Главная</a>
                    </router-link>
                </li>
                <li class="menu__item">
                    <router-link to="/shop">
                        <a href="" class="menu__link">Товары</a>
                    </router-link> 
                </li>
                <li class="menu__item">
                  <img src="../assets/header/shop.png" alt="" class="menu__link--img">
                </li>
            </ul>
        </nav>
    </div>
</div>
</template>

<style scoped>

.header {
    background-color: #1a1a1a;
}

.header__container {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
}

.header__menu-list {
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    gap: 50px;
}

.header__logo {
    max-height: 100px;
}

.menu__item {
    list-style: none;
}

.menu__link {
    font-size: 1.25rem;
    color: white;
    text-decoration: none;
    border: 0;
}

.menu__link--img{
    cursor: pointer;
}

.menu__link--img:hover {
    content: url("../assets/header/shopbl.png");
}

.menu__link:hover {
    color: #00ffff;
}

@media screen and (max-width: 1024px) {
  
}
@media screen and (max-width: 768px) {
    .header__menu-list {
        gap: 40px;
    }
}
@media screen and (max-width: 576px) {
    .header__container {
        flex-direction: column;
    }
    .header__menu {
        width: 100%;
    }
    .header__menu-list {
        padding: 0;
        justify-content: space-around;
    }
}
@media screen and (max-width: 320px) {
  
}

</style>