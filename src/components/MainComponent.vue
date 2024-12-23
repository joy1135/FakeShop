<template>
<div class="main">
    <div class="main__container container">
        <div class="main__title">
            Добро пожаловать в SHOP
        </div>
        <div class="main__desc">
            Здесь вы найдете всё, что нужно для комфортной, стильной и современной жизни. 
            Мы предлагаем только качественные товары, выгодные цены и удобный сервис, чтобы ваши покупки приносили радость.
        </div>
    </div>
</div>
</template>

<style>

.main {
    min-height: 500px;
    display: flex;
    justify-content: center;
}

.main__container {
    display: flex;
    justify-content: center;
    flex-direction: column;
    align-items: center;
    text-align: center;
    color: #1a1a1a;
    gap: 30px;
}

.main__title {
    font-size: 5.625rem;
}

.main__desc {
    font-size: 2.25rem;
}

@media screen and (max-width: 1024px) {
    .main__title {
        font-size: 5.375rem;
    }
    .main__desc {
        font-size: 2.05rem;
    }
}
@media screen and (max-width: 768px) {
    .main__title {
        font-size: 4.6875rem;
    }
    .main__desc {
        font-size: 1.8rem;
    }
}
@media screen and (max-width: 576px) {
    .main__title {
        font-size: 3.35rem;
    }
    .main__desc {
        font-size: 1.6rem;
    }
}
@media screen and (max-width: 320px) {
    .main__title {
        font-size: 2.75rem;
    }
    .main__desc {
        font-size: 1.4rem;
    }
}

</style>