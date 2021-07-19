import './App.css';
import {Header} from './components/index'

const AppList = () => {
    const items = ['items 1', 'Items 2', 'Items 3', 'items 1', 'Items 2', 'Items 3',]
    return (
        <ul>
            {
                items.map((item, index) => <li key={index}>{item}</li>)
            }
        </ul>
    )
}

const Layout = () => {
    return (
        <div className="container content__container">
            <h1 className="site-h1">Cтавки на спорт сегодня.</h1>
            <div className="row content-block">

                <div className="bread-crumbs">

                    <div id="k2ModuleBox100" className="k2BreadcrumbsBlock">
                        <span className="bcTitle">You are here:</span><a href="http://btc-bonus.ru/">Главная</a><span
                        className="bcSeparator">-</span>Ставка дня
                    </div>

                </div>
                <div className="country-block">

                </div>
                <div className="content1">
                    <div className="col-lg-8 left-col bets-block">

                        <div id="system-message-container">
                        </div>



                        <div id="k2Container" className="tagView">

                            <div className="componentheading">
                                Ставка дня
                            </div>



                            <div className="k2FeedIcon">
                                <a href="/?format=feed" title="Subscribe to this RSS feed">
                                    <span>Subscribe to this RSS feed</span>
                                </a>
                                <div className="clr"></div>
                            </div>

                            <div className="tagItemList">

                                <div className="tagItemView">
                                    <div className="tagItemHeader">

                                    </div>
                                    <a href="/stavka-dnya/postov-tsska">
                                        <div className="tagItemBody">

                                            <div className="tagItemIntroText img-inner-title">
                                                <div className="overlay-hidden"></div>

                                                <div className="item-overlay"></div>


                                                <div className="introtext"><img className="prognoz-img"
                                                                                src="http://btc-bonus.ru/images/foto/zenit151220.webp"
                                                                                alt="img" />
                                                    <p className="prognoz-text">&nbsp;Ростов-ЦСКА, Гончаренко в отставку,
                                                        как будет роходить матч? Встрепенётся ли ЦСКА? Будет ли назначен
                                                        исполняющим обязанности Березуцкий? Много вопросов к игре. Армейцы
                                                        попали в игровую яму и пока не знают как из неё выползти, тем более
                                                        главный опять навострил лыжи к себе на родину. Думаю здесь
                                                        непроигрыш Ростова. Команде Карпина есть, что доказывать и они
                                                        совсем близко к группе лидеров, так что очки перед зимним окном
                                                        необходимы, а армейцам нужна перезагрузка. Поражение в этой игре
                                                        даст шанс спокойно и без лишних нервов отпустить Ганчаренко</p>
                                                    <div className="text-wrap">
                                                        <p className="prognoz-text">&nbsp;&nbsp;Моя ставка:</p>
                                                        <p className="my-bet">&nbsp;1Х</p>
                                                        <p className="prognoz-text">&nbsp;&nbsp;за кеф.=</p>
                                                        <p className="my-bet">&nbsp;&nbsp;1.75</p>
                                                    </div>
                                                </div>
                                                <div className="today">Сегодня!</div>
                                                <div className="matchtime1"> 20:00</div>

                                                <div className="item-title">
                                                    Ростов-ЦСКА
                                                </div>
                                                <div className="matchk">кеф.=
                                                    1.75
                                                </div>
                                                <div className="greenbox">
                                                    17.12.2020
                                                </div>

                                                <div className="readmore">Читать далее...</div>

                                            </div>
                                            <div className="clr"></div>
                                        </div>


                                    </a>


                                    <div className="clr"></div>


                                    <div className="tagItemExtraFields">
                                        <h4>Additional Info</h4>
                                        <ul>
                                            <li className="even typeDate group4 aliasMatchday">
                                                <span className="tagItemExtraFieldsLabel">Дата</span>
                                                <span className="tagItemExtraFieldsValue">17.12.2020</span>
                                            </li>
                                            <li className="odd typeTextfield group4 aliasMatchtime">
                                                <span className="tagItemExtraFieldsLabel">Время</span>
                                                <span className="tagItemExtraFieldsValue">20:00</span>
                                            </li>
                                            <li className="even typeTextfield group4 aliasMatchbet">
                                                <span className="tagItemExtraFieldsLabel">Ставка</span>
                                                <span className="tagItemExtraFieldsValue">1Х</span>
                                            </li>
                                            <li className="odd typeTextfield group4 aliasMatchk">
                                                <span className="tagItemExtraFieldsLabel">Кефы</span>
                                                <span className="tagItemExtraFieldsValue">1.75</span>
                                            </li>
                                        </ul>
                                        <div className="clr"></div>
                                    </div>


                                    <div className="clr"></div>
                                </div>


                                <div className="tagItemView">
                                    <div className="tagItemHeader">

                                    </div>
                                    <a href="/stavka-dnya/zenit-spaptak">
                                        <div className="tagItemBody">

                                            <div className="tagItemIntroText img-inner-title">
                                                <div className="overlay-hidden"></div>

                                                <div className="item-overlay"></div>


                                                <div className="introtext"><p><img className="prognoz-img"
                                                                                   src="http://btc-bonus.ru/images/foto/zenit151220.webp"
                                                                                   alt="img" /></p>
                                                    <p className="prognoz-text">&nbsp;Зенит-Спартак, главный матч окончания
                                                        этого года, сможел ли Спартак продемонстрировать свои амбиции на
                                                        чемпионский титул или нет? Включит ли клуб с берегов Невы
                                                        административный ресурс? Куча вопросов к этому матчу. Но давайте
                                                        подойдём объективно. Зенит устал после еврокубковой компании и
                                                        еле-еле волочёт ноги, Спартак же должен быть посвежее. но и у тех не
                                                        очнь получается. Слишком много стоит на кону и никто вперед лезть не
                                                        будет, проиграет ли Семак или Тедеско и под ними закачается кресло
                                                        главного тренера, не проще ли скатать унылые 0:0 или 1:1 и уйти на
                                                        зимний перерыв. Да и погода благоволит такому раскладу. МОя ставка:
                                                        ТМ2.5</p>
                                                    <div className="text-wrap">
                                                        <p className="prognoz-text">&nbsp;&nbsp;Моя ставка:</p>
                                                        <p className="my-bet">&nbsp;ТМ2.5</p>
                                                        <p className="prognoz-text">&nbsp;&nbsp;за кеф.=</p>
                                                        <p className="my-bet">&nbsp;&nbsp;2.27</p>
                                                    </div>
                                                </div>
                                                <div className="today">Сегодня!</div>
                                                <div className="matchtime1"> 20:00</div>

                                                <div className="item-title">
                                                    Зенит-Спартак
                                                </div>
                                                <div className="matchk">кеф.=
                                                    2.27
                                                </div>
                                                <div className="greenbox">
                                                    16.12.2020
                                                </div>

                                                <div className="readmore">Читать далее...</div>

                                            </div>
                                            <div className="clr"></div>
                                        </div>


                                    </a>


                                    <div className="clr"></div>


                                    <div className="tagItemExtraFields">
                                        <h4>Additional Info</h4>
                                        <ul>
                                            <li className="even typeDate group4 aliasMatchday">
                                                <span className="tagItemExtraFieldsLabel">Дата</span>
                                                <span className="tagItemExtraFieldsValue">16.12.2020</span>
                                            </li>
                                            <li className="odd typeTextfield group4 aliasMatchtime">
                                                <span className="tagItemExtraFieldsLabel">Время</span>
                                                <span className="tagItemExtraFieldsValue">20:00</span>
                                            </li>
                                            <li className="even typeTextfield group4 aliasMatchbet">
                                                <span className="tagItemExtraFieldsLabel">Ставка</span>
                                                <span className="tagItemExtraFieldsValue">ТМ2.5</span>
                                            </li>
                                            <li className="odd typeTextfield group4 aliasMatchk">
                                                <span className="tagItemExtraFieldsLabel">Кефы</span>
                                                <span className="tagItemExtraFieldsValue">2.27</span>
                                            </li>
                                        </ul>
                                        <div className="clr"></div>
                                    </div>


                                    <div className="clr"></div>
                                </div>


                                <div className="tagItemView">
                                    <div className="tagItemHeader">

                                    </div>
                                    <a href="/stavka-dnya/vulvephempton-chelsi">
                                        <div className="tagItemBody">

                                            <div className="tagItemIntroText img-inner-title">
                                                <div className="overlay-hidden"></div>

                                                <div className="item-overlay"></div>


                                                <div className="introtext"><p><img className="prognoz-img"
                                                                                   src="http://btc-bonus.ru/images/foto/zenit151220.webp"
                                                                                   alt="img"/></p>
                                                    <p className="prognoz-text">&nbsp;Вулверхемптон-Челси, интересный матч
                                                        ожидает нас во вторник 15 декабря. Обе команды не совсем удачно
                                                        играют свои последние матчи, "волки" последние 2 игры проиграли
                                                        Астон-Вилле 0:1 и крупно влетели Ливерпулю 4:0. Аристократы же на
                                                        выходнях проиграли Эвертону 0:1, а ранее вничью разошлись с
                                                        Краснодаром. По игре Челси выглядит неплохо и уступил Эвертону
                                                        только из-за серьёзной ошибки игрока. В любом случае, игра для
                                                        аристократов будет непростая, но я ставлю на победу гостей, так как
                                                        "волки" подсдулись в этом сезоне.</p>
                                                    <div className="text-wrap">
                                                        <p className="prognoz-text">&nbsp;&nbsp;Моя ставка:</p>
                                                        <p className="my-bet">&nbsp;Р2</p>
                                                        <p className="prognoz-text">&nbsp;&nbsp;за кеф.=</p>
                                                        <p className="my-bet">&nbsp;&nbsp;1.75</p>
                                                    </div>
                                                </div>
                                                <div className="today">Сегодня!</div>
                                                <div className="matchtime1"> 21:00</div>

                                                <div className="item-title">
                                                    Вулверхемптон-Челси
                                                </div>
                                                <div className="matchk">кеф.=
                                                    1.75
                                                </div>
                                                <div className="greenbox">
                                                    15.12.2020
                                                </div>

                                                <div className="readmore">Читать далее...</div>

                                            </div>
                                            <div className="clr"></div>
                                        </div>


                                    </a>


                                    <div className="clr"></div>


                                    <div className="tagItemExtraFields">
                                        <h4>Additional Info</h4>
                                        <ul>
                                            <li className="even typeDate group4 aliasMatchday">
                                                <span className="tagItemExtraFieldsLabel">Дата</span>
                                                <span className="tagItemExtraFieldsValue">15.12.2020</span>
                                            </li>
                                            <li className="odd typeTextfield group4 aliasMatchtime">
                                                <span className="tagItemExtraFieldsLabel">Время</span>
                                                <span className="tagItemExtraFieldsValue">21:00</span>
                                            </li>
                                            <li className="even typeTextfield group4 aliasMatchbet">
                                                <span className="tagItemExtraFieldsLabel">Ставка</span>
                                                <span className="tagItemExtraFieldsValue">Р2</span>
                                            </li>
                                            <li className="odd typeTextfield group4 aliasMatchk">
                                                <span className="tagItemExtraFieldsLabel">Кефы</span>
                                                <span className="tagItemExtraFieldsValue">1.75</span>
                                            </li>
                                        </ul>
                                        <div className="clr"></div>
                                    </div>


                                    <div className="clr"></div>
                                </div>


                                <div className="tagItemView">
                                    <div className="tagItemHeader">

                                    </div>
                                    <a href="/stavka-dnya/selyta-kadis">
                                        <div className="tagItemBody">

                                            <div className="tagItemIntroText img-inner-title">
                                                <div className="overlay-hidden"></div>

                                                <div className="item-overlay"></div>


                                                <div className="introtext"><p><img className="prognoz-img"
                                                                                   src="http://btc-bonus.ru/images/foto/zenit151220.webp"
                                                                                   alt="img"/></p>
                                                    <p className="prognoz-text">Сельта-Кадис, отличный матч для ставки.
                                                        Сельта когда-то представляла из себя грозную силу, но сейчас это
                                                        довольно слабая команда на дне турнирной таблицы чемпионата Испании,
                                                        где сразу же продаются игроки, которые более или менее заиграли.
                                                        Кадис же сенсационно выступают для новичка чемпионата, в прошлом
                                                        туре была обыграна Барса. Единственное , что странно букмекеры
                                                        обрушили кефы на Сельту и теперь она новый фаворит в матче. Не могу
                                                        согласиться с этим, последние 2 матча Сельта уверенно выиграла, но
                                                        это еще не показатель того, что игра у них наладилась. Считаю
                                                        неплохой ставкой непроигрыш Кадиса.</p>
                                                    <div className="text-wrap">
                                                        <p className="prognoz-text">&nbsp;&nbsp;Моя ставка:</p>
                                                        <p className="my-bet">&nbsp;Х2</p>
                                                        <p className="prognoz-text">&nbsp;&nbsp;за кеф.=</p>
                                                        <p className="my-bet">&nbsp;&nbsp;2.07</p>
                                                    </div>
                                                </div>
                                                <div className="today">Сегодня!</div>
                                                <div className="matchtime1"> 23:00</div>

                                                <div className="item-title">
                                                    Сельта-Кадис
                                                </div>
                                                <div className="matchk">кеф.=
                                                    2.07
                                                </div>
                                                <div className="greenbox">
                                                    14.12.2020
                                                </div>

                                                <div className="readmore">Читать далее...</div>

                                            </div>
                                            <div className="clr"></div>
                                        </div>


                                    </a>


                                    <div className="clr"></div>


                                    <div className="tagItemExtraFields">
                                        <h4>Additional Info</h4>
                                        <ul>
                                            <li className="even typeDate group4 aliasMatchday">
                                                <span className="tagItemExtraFieldsLabel">Дата</span>
                                                <span className="tagItemExtraFieldsValue">14.12.2020</span>
                                            </li>
                                            <li className="odd typeTextfield group4 aliasMatchtime">
                                                <span className="tagItemExtraFieldsLabel">Время</span>
                                                <span className="tagItemExtraFieldsValue">23:00</span>
                                            </li>
                                            <li className="even typeTextfield group4 aliasMatchbet">
                                                <span className="tagItemExtraFieldsLabel">Ставка</span>
                                                <span className="tagItemExtraFieldsValue">Х2</span>
                                            </li>
                                            <li className="odd typeTextfield group4 aliasMatchk">
                                                <span className="tagItemExtraFieldsLabel">Кефы</span>
                                                <span className="tagItemExtraFieldsValue">2.07</span>
                                            </li>
                                        </ul>
                                        <div className="clr"></div>
                                    </div>


                                    <div className="clr"></div>
                                </div>
                                <div className="tagItemView">
                                    <div className="tagItemHeader">

                                    </div>
                                    <a href="/stavka-dnya/kpasnodap-lokomotiv">
                                        <div className="tagItemBody">
                                            <div className="tagItemIntroText img-inner-title">
                                                <div className="overlay-hidden"></div>

                                                <div className="item-overlay"></div>


                                                <div className="introtext"><p><img className="prognoz-img"
                                                                                   src="http://btc-bonus.ru/images/foto/zenit151220.webp"
                                                                                   alt="img"/></p>
                                                    <p className="prognoz-text">&nbsp;Краснодар-Локомотив, крайне непростая
                                                        игра для обоих соперников. Обе команды провели матчи в лиге
                                                        чемпионов, но итоги разные, хозяева сумели набрать очки на выезде в
                                                        Лондоне и пройти в "еврокубковую весну", гости же не сумели одолеть
                                                        немотивированную Баварию и вылетели из всех европейских турниров.
                                                        Для Локо вдвойне обидно, что основное внимание они уделили Лиге
                                                        Чемпионов, тем самым подотстав во внутреннем первенстве. Думаю пора
                                                        браться и за дела в Российской Премьер Лиге. Моя ставка Локо не
                                                        проиграет</p>
                                                    <div className="text-wrap">
                                                        <p className="prognoz-text">&nbsp;&nbsp;Моя ставка:</p>
                                                        <p className="my-bet">&nbsp;Х2</p>
                                                        <p className="prognoz-text">&nbsp;&nbsp;за кеф.=</p>
                                                        <p className="my-bet">&nbsp;&nbsp;1.9</p>
                                                    </div>
                                                </div>
                                                <div className="today">Сегодня!</div>
                                                <div className="matchtime1"> 16:30</div>

                                                <div className="item-title">
                                                    Краснодар-Локомотив
                                                </div>
                                                <div className="matchk">кеф.=
                                                    1.9
                                                </div>
                                                <div className="greenbox">
                                                    13.12.2020
                                                </div>

                                                <div className="readmore">Читать далее...</div>

                                            </div>
                                            <div className="clr"></div>
                                        </div>


                                    </a>
                                    <div className="tagItemExtraFields">
                                        <h4>Additional Info</h4>
                                        <ul>
                                            <li className="even typeDate group4 aliasMatchday">
                                                <span className="tagItemExtraFieldsLabel">Дата</span>
                                                <span className="tagItemExtraFieldsValue">13.12.2020</span>
                                            </li>
                                            <li className="odd typeTextfield group4 aliasMatchtime">
                                                <span className="tagItemExtraFieldsLabel">Время</span>
                                                <span className="tagItemExtraFieldsValue">16:30</span>
                                            </li>
                                            <li className="even typeTextfield group4 aliasMatchbet">
                                                <span className="tagItemExtraFieldsLabel">Ставка</span>
                                                <span className="tagItemExtraFieldsValue">Х2</span>
                                            </li>
                                            <li className="odd typeTextfield group4 aliasMatchk">
                                                <span className="tagItemExtraFieldsLabel">Кефы</span>
                                                <span className="tagItemExtraFieldsValue">1.9</span>
                                            </li>
                                        </ul>
                                        <div className="clr"></div>
                                    </div>


                                    <div className="clr"></div>
                                </div>
                                <div className="tagItemView">
                                    <div className="tagItemHeader">
                                    </div>
                                    <a href="/stavka-dnya/zenit-dinamo">
                                        <div className="tagItemBody">
                                            <div className="tagItemIntroText img-inner-title">
                                                <div className="overlay-hidden"></div>

                                                <div className="item-overlay"></div>


                                                <div className="introtext"><p><img className="prognoz-img"
                                                                                   src="http://btc-bonus.ru/images/foto/zenit151220.webp"
                                                                                   alt="img"/></p>
                                                    <p className="prognoz-text">&nbsp;Зенит-Динамо, измученный Лигой
                                                        Чемпионой Зенит принимает обновившееся Динамо. У хозяев выздововела
                                                        группа атаки, Азмун, Малкольм, Дриусси, вот только Дзюба пока не
                                                        может найти свою игру, после недавнего инциндента. Динамо стало
                                                        лучше играть в атаку с приходом нового главного тренера. Также не
                                                        забываем, что Динамо уже обыгрывало Зенит в этом сезоне. В той игре
                                                        динамовцы предложили жёсткий стиль, при каких либо финтах
                                                        зенитовской группы атаки их вырубали "по ногам", даже после игры
                                                        тренер жаловался на излишнюю жестокость. Думаю, Зенит слишком устал
                                                        от нервотрёпки, которая выдалась им в последние месяцы и потеряет
                                                        очки в этом матче, а Динамо соответственно не проиграет.</p>
                                                    <div className="text-wrap">
                                                        <p className="prognoz-text">&nbsp;&nbsp;Моя ставка:</p>
                                                        <p className="my-bet">&nbsp;Х2</p>
                                                        <p className="prognoz-text">&nbsp;&nbsp;за кеф.=</p>
                                                        <p className="my-bet">&nbsp;&nbsp;2.5</p>
                                                    </div>
                                                </div>
                                                <div className="today">Сегодня!</div>
                                                <div className="matchtime1"> 19:00</div>

                                                <div className="item-title">
                                                    Зенит-Динамо
                                                </div>
                                                <div className="matchk">кеф.=
                                                    2.5
                                                </div>
                                                <div className="greenbox">
                                                    12.12.2020
                                                </div>

                                                <div className="readmore">Читать далее...</div>

                                            </div>
                                            <div className="clr"></div>
                                        </div>


                                    </a>
                                    <div className="tagItemExtraFields">
                                        <h4>Additional Info</h4>
                                        <ul>
                                            <li className="even typeDate group4 aliasMatchday">
                                                <span className="tagItemExtraFieldsLabel">Дата</span>
                                                <span className="tagItemExtraFieldsValue">12.12.2020</span>
                                            </li>
                                            <li className="odd typeTextfield group4 aliasMatchtime">
                                                <span className="tagItemExtraFieldsLabel">Время</span>
                                                <span className="tagItemExtraFieldsValue">19:00</span>
                                            </li>
                                            <li className="even typeTextfield group4 aliasMatchbet">
                                                <span className="tagItemExtraFieldsLabel">Ставка</span>
                                                <span className="tagItemExtraFieldsValue">Х2</span>
                                            </li>
                                            <li className="odd typeTextfield group4 aliasMatchk">
                                                <span className="tagItemExtraFieldsLabel">Кефы</span>
                                                <span className="tagItemExtraFieldsValue">2.5</span>
                                            </li>
                                        </ul>
                                        <div className="clr"></div>
                                    </div>


                                    <div className="clr"></div>
                                </div>


                                <div className="tagItemView">
                                    <div className="tagItemHeader">

                                    </div>
                                    <a href="/stavka-dnya/lids-vest-hem">
                                        <div className="tagItemBody">

                                            <div className="tagItemIntroText img-inner-title">
                                                <div className="overlay-hidden"></div>

                                                <div className="item-overlay"></div>


                                                <div className="introtext"><p><img className="prognoz-img"
                                                                                   src="http://btc-bonus.ru/images/foto/zenit151220.webp"
                                                                                   alt="img"/></p>
                                                    <p className="prognoz-text">&nbsp;Лидс-ВестХем, 12-ый тур чемпионата
                                                        открывает этот матч. Обе команды представляют из себя типичных
                                                        середняков, способных потрепать нервы фаворитам. Последние 2 игры
                                                        Лидс провёл неплохо, обыграв на выезде Эвертон, но проиграл в гостях
                                                        Челси. ВестХем же играл дома две игры, где выиграл у Астон Виллы и
                                                        проиграл Ман Юнайтед. Молотобойцы не смотрятся уверенно в гостях, а
                                                        "павлины" же наоборот неплохо играют дома. Думаю разумной ставкой в
                                                        этом матче будет фора первой с "0"</p>
                                                    <div className="text-wrap">
                                                        <p className="prognoz-text">&nbsp;&nbsp;Моя ставка:</p>
                                                        <p className="my-bet">&nbsp;1(0)</p>
                                                        <p className="prognoz-text">&nbsp;&nbsp;за кеф.=</p>
                                                        <p className="my-bet">&nbsp;&nbsp;1.72</p>
                                                    </div>
                                                </div>
                                                <div className="today">Сегодня!</div>
                                                <div className="matchtime1"> 23:00</div>

                                                <div className="item-title">
                                                    Лидс-Вест Хем
                                                </div>
                                                <div className="matchk">кеф.=
                                                    1.72
                                                </div>
                                                <div className="greenbox">
                                                    11.12.2020
                                                </div>

                                                <div className="readmore">Читать далее...</div>

                                            </div>
                                            <div className="clr"></div>
                                        </div>


                                    </a>


                                    <div className="clr"></div>


                                    <div className="tagItemExtraFields">
                                        <h4>Additional Info</h4>
                                        <ul>
                                            <li className="even typeDate group4 aliasMatchday">
                                                <span className="tagItemExtraFieldsLabel">Дата</span>
                                                <span className="tagItemExtraFieldsValue">11.12.2020</span>
                                            </li>
                                            <li className="odd typeTextfield group4 aliasMatchtime">
                                                <span className="tagItemExtraFieldsLabel">Время</span>
                                                <span className="tagItemExtraFieldsValue">23:00</span>
                                            </li>
                                            <li className="even typeTextfield group4 aliasMatchbet">
                                                <span className="tagItemExtraFieldsLabel">Ставка</span>
                                                <span className="tagItemExtraFieldsValue">1(0)</span>
                                            </li>
                                            <li className="odd typeTextfield group4 aliasMatchk">
                                                <span className="tagItemExtraFieldsLabel">Кефы</span>
                                                <span className="tagItemExtraFieldsValue">1.72</span>
                                            </li>
                                        </ul>
                                        <div className="clr"></div>
                                    </div>


                                    <div className="clr"></div>
                                </div>


                                <div className="tagItemView">
                                    <div className="tagItemHeader">

                                    </div>
                                    <a href="/stavka-dnya/dinamo-zagpeb-tsska">
                                        <div className="tagItemBody">

                                            <div className="tagItemIntroText img-inner-title">
                                                <div className="overlay-hidden"></div>

                                                <div className="item-overlay"></div>


                                                <div className="introtext"><p><img className="prognoz-img"
                                                                                   src="http://btc-bonus.ru/images/foto/zenit151220.webp"
                                                                                   alt="img"/></p>
                                                    <p className="prognoz-text">&nbsp;Динамо Загреб - ЦСКА, обе команды
                                                        лишились турнирной мотивации, хозяева заняли безоговорочное первое
                                                        место, гости оговорочное последнее. Оговорочное лишь потому, что
                                                        есть шанс зацепиться за Лигу Европы. Я думаю, у армейцев есть шанс
                                                        зацепиться за очки, так как в первой очной встрече динамовцам
                                                        откровенно повезло, да и в других встречах в группе, они не
                                                        выглядели безоговорочным фаворитом. У ЦСКА уже пять матчей нет побед
                                                        и кресло главного закочалось под Гончаренко, если сольют и здесь, то
                                                        будет худо. Их хороших новостей, у ЦСКА вернулся базовый игрок
                                                        Фернандес, и уже сыграл одну игру с Химками, где по игре армейцы ,
                                                        как раз прибавили. Вобщем, тут моя ставка армейцы не проиграют.</p>
                                                    <div className="text-wrap">
                                                        <p className="prognoz-text">&nbsp;&nbsp;Моя ставка:</p>
                                                        <p className="my-bet">&nbsp;Х2</p>
                                                        <p className="prognoz-text">&nbsp;&nbsp;за кеф.=</p>
                                                        <p className="my-bet">&nbsp;&nbsp;2.1</p>
                                                    </div>
                                                </div>
                                                <div className="today">Сегодня!</div>
                                                <div className="matchtime1"> 20:55</div>

                                                <div className="item-title">
                                                    Динамо Загреб -ЦСКА
                                                </div>
                                                <div className="matchk">кеф.=
                                                    2.1
                                                </div>
                                                <div className="greenbox">
                                                    10.12.2020
                                                </div>

                                                <div className="readmore">Читать далее...</div>

                                            </div>
                                            <div className="clr"></div>
                                        </div>


                                    </a>


                                    <div className="clr"></div>


                                    <div className="tagItemExtraFields">
                                        <h4>Additional Info</h4>
                                        <ul>
                                            <li className="even typeDate group4 aliasMatchday">
                                                <span className="tagItemExtraFieldsLabel">Дата</span>
                                                <span className="tagItemExtraFieldsValue">10.12.2020</span>
                                            </li>
                                            <li className="odd typeTextfield group4 aliasMatchtime">
                                                <span className="tagItemExtraFieldsLabel">Время</span>
                                                <span className="tagItemExtraFieldsValue">20:55</span>
                                            </li>
                                            <li className="even typeTextfield group4 aliasMatchbet">
                                                <span className="tagItemExtraFieldsLabel">Ставка</span>
                                                <span className="tagItemExtraFieldsValue">Х2</span>
                                            </li>
                                            <li className="odd typeTextfield group4 aliasMatchk">
                                                <span className="tagItemExtraFieldsLabel">Кефы</span>
                                                <span className="tagItemExtraFieldsValue">2.1</span>
                                            </li>
                                        </ul>
                                        <div className="clr"></div>
                                    </div>


                                    <div className="clr"></div>
                                </div>


                                <div className="tagItemView">
                                    <div className="tagItemHeader">

                                    </div>
                                    <a href="/stavka-dnya/bavapiya-lokomotiv">
                                        <div className="tagItemBody">

                                            <div className="tagItemIntroText img-inner-title">
                                                <div className="overlay-hidden"></div>

                                                <div className="item-overlay"></div>


                                                <div className="introtext"><p><img className="prognoz-img"
                                                                                   src="http://btc-bonus.ru/images/foto/zenit151220.webp"
                                                                                   alt="img"/></p>
                                                    <p className="prognoz-text">&nbsp;Бавария-Локомотив, железнодорожники
                                                        ещё могут зацепиться за Лигу Европы, для этого всего лишь нужно
                                                        обыграть Баварию на её поле. Всего ничего. =) На самом деле
                                                        зацепиться за очки Локо может, Бавария уже потеряла мотивацию,
                                                        выйдет наверняка неоптимальный состав. Гости могут прыгнуть выше
                                                        головы и забрать очки в Баварии, это даже с репутационной стороны
                                                        будет неплохо. Единственное, красно-зелёным не стоит идти с открытым
                                                        забралом, так как даже вторым составом немцы могут накидать охапку
                                                        голов. Внимательно играем в защите и ждём сво шанс. Отсюда моя
                                                        ставка ТМ3.5 за кеф. 1.8</p>
                                                    <div className="text-wrap">
                                                        <p className="prognoz-text">&nbsp;&nbsp;Моя ставка:</p>
                                                        <p className="my-bet">&nbsp;ТМ3.5</p>
                                                        <p className="prognoz-text">&nbsp;&nbsp;за кеф.=</p>
                                                        <p className="my-bet">&nbsp;&nbsp;1.8</p>
                                                    </div>
                                                </div>
                                                <div className="today">Сегодня!</div>
                                                <div className="matchtime1"> 23:00</div>

                                                <div className="item-title">
                                                    Бавария-Локомотив
                                                </div>
                                                <div className="matchk">кеф.=
                                                    1.8
                                                </div>
                                                <div className="greenbox">
                                                    09.12.2020
                                                </div>

                                                <div className="readmore">Читать далее...</div>

                                            </div>
                                            <div className="clr"></div>
                                        </div>


                                    </a>


                                    <div className="clr"></div>


                                    <div className="tagItemExtraFields">
                                        <h4>Additional Info</h4>
                                        <ul>
                                            <li className="even typeDate group4 aliasMatchday">
                                                <span className="tagItemExtraFieldsLabel">Дата</span>
                                                <span className="tagItemExtraFieldsValue">09.12.2020</span>
                                            </li>
                                            <li className="odd typeTextfield group4 aliasMatchtime">
                                                <span className="tagItemExtraFieldsLabel">Время</span>
                                                <span className="tagItemExtraFieldsValue">23:00</span>
                                            </li>
                                            <li className="even typeTextfield group4 aliasMatchbet">
                                                <span className="tagItemExtraFieldsLabel">Ставка</span>
                                                <span className="tagItemExtraFieldsValue">ТМ3.5</span>
                                            </li>
                                            <li className="odd typeTextfield group4 aliasMatchk">
                                                <span className="tagItemExtraFieldsLabel">Кефы</span>
                                                <span className="tagItemExtraFieldsValue">1.8</span>
                                            </li>
                                        </ul>
                                        <div className="clr"></div>
                                    </div>


                                    <div className="clr"></div>
                                </div>


                                <div className="tagItemView">
                                    <div className="tagItemHeader">

                                    </div>
                                    <a href="/stavka-dnya/chelsi-kpasnodap">
                                        <div className="tagItemBody">

                                            <div className="tagItemIntroText img-inner-title">
                                                <div className="overlay-hidden"></div>

                                                <div className="item-overlay"></div>


                                                <div className="introtext"><p><img className="prognoz-img"
                                                                                   src="http://btc-bonus.ru/images/foto/zenit151220.webp"
                                                                                   alt="img"/></p>
                                                    <p className="prognoz-text">&nbsp;Челси-Краснодар, здесь безусловно
                                                        лидером являются хозяева, даже если оны выставят второй состав,
                                                        который у них тоже в порядке. У Краснодара проблемы в линию защиты,
                                                        даже в выигранном матче, защита быков не была на высоте.Тут может
                                                        повториться история с сегодняшним матчем в питере, обе команды могут
                                                        сыграть открыто и в своё удовольствие. А это значит, что мы можем
                                                        увидеть открытый и результативный футбол. Моя ставка тотал больше
                                                        3</p>
                                                    <div className="text-wrap">
                                                        <p className="prognoz-text">&nbsp;&nbsp;Моя ставка:</p>
                                                        <p className="my-bet">&nbsp;ТБ3</p>
                                                        <p className="prognoz-text">&nbsp;&nbsp;за кеф.=</p>
                                                        <p className="my-bet">&nbsp;&nbsp;1.7</p>
                                                    </div>
                                                </div>
                                                <div className="today">Сегодня!</div>
                                                <div className="matchtime1"> 23:00</div>

                                                <div className="item-title">
                                                    Челси-Краснодар
                                                </div>
                                                <div className="matchk">кеф.=
                                                    1.7
                                                </div>
                                                <div className="greenbox">
                                                    08.12.2020
                                                </div>

                                                <div className="readmore">Читать далее...</div>

                                            </div>
                                            <div className="clr"></div>
                                        </div>


                                    </a>


                                    <div className="clr"></div>


                                    <div className="tagItemExtraFields">
                                        <h4>Additional Info</h4>
                                        <ul>
                                            <li className="even typeDate group4 aliasMatchday">
                                                <span className="tagItemExtraFieldsLabel">Дата</span>
                                                <span className="tagItemExtraFieldsValue">08.12.2020</span>
                                            </li>
                                            <li className="odd typeTextfield group4 aliasMatchtime">
                                                <span className="tagItemExtraFieldsLabel">Время</span>
                                                <span className="tagItemExtraFieldsValue">23:00</span>
                                            </li>
                                            <li className="even typeTextfield group4 aliasMatchbet">
                                                <span className="tagItemExtraFieldsLabel">Ставка</span>
                                                <span className="tagItemExtraFieldsValue">ТБ3</span>
                                            </li>
                                            <li className="odd typeTextfield group4 aliasMatchk">
                                                <span className="tagItemExtraFieldsLabel">Кефы</span>
                                                <span className="tagItemExtraFieldsValue">1.7</span>
                                            </li>
                                        </ul>
                                        <div className="clr"></div>
                                    </div>


                                    <div className="clr"></div>
                                </div>

                            </div>
                            <div className="k2Pagination">
                                <div className="k2PaginationLinks">
                                    <nav role="navigation" aria-label="Разбиение на страницы">
                                        <ul className="pagination-list">
                                            <li className="disabled"><a><span className="icon-first"
                                                                              aria-hidden="true"></span></a></li>
                                            <li className="disabled"><a><span className="icon-previous"
                                                                              aria-hidden="true"></span></a></li>
                                            <li className="active hidden-phone"><a aria-current="true"
                                                                                   aria-label="Страница 1">1</a></li>
                                            <li className="hidden-phone"><a title="2" href="/?start=10" className="pagenav"
                                                                            aria-label="Перейти на страницу 2">2</a></li>
                                            <li className="hidden-phone"><a title="3" href="/?start=20" className="pagenav"
                                                                            aria-label="Перейти на страницу 3">3</a></li>
                                            <li className="hidden-phone"><a title="4" href="/?start=30" className="pagenav"
                                                                            aria-label="Перейти на страницу 4">4</a></li>
                                            <li className="hidden-phone"><a title="5" href="/?start=40" className="pagenav"
                                                                            aria-label="Перейти на страницу 5">...</a></li>
                                            <li className="hidden-phone"><a title="6" href="/?start=50" className="pagenav"
                                                                            aria-label="Перейти на страницу 6">6</a></li>
                                            <li className="hidden-phone"><a title="7" href="/?start=60" className="pagenav"
                                                                            aria-label="Перейти на страницу 7">7</a></li>
                                            <li className="hidden-phone"><a title="8" href="/?start=70" className="pagenav"
                                                                            aria-label="Перейти на страницу 8">8</a></li>
                                            <li className="hidden-phone"><a title="9" href="/?start=80" className="pagenav"
                                                                            aria-label="Перейти на страницу 9">9</a></li>
                                            <li className="hidden-phone"><a title="10" href="/?start=90" className="pagenav"
                                                                            aria-label="Перейти на страницу 10">10</a></li>
                                            <li><a title="Вперед" href="/?start=10" className="pagenav"
                                                   aria-label="Перейти на страницу Вперед"><span className="icon-next"
                                                                                                 aria-hidden="true"></span></a>
                                            </li>
                                            <li><a title="В конец" href="/?start=210" className="pagenav"
                                                   aria-label="Перейти на страницу В конец"><span className="icon-last"
                                                                                                  aria-hidden="true"></span></a>
                                            </li>
                                        </ul>
                                    </nav>
                                </div>
                                <div className="k2PaginationCounter">
                                    Страница 1 из 22
                                </div>
                            </div>
                        </div>


                    </div>
                    <div className="col-lg-4 right-col">
                        <div className="right-col__wrap">
                            <h2 className="right-col__h2">Рекомендуемые букмекеры</h2>

                            <a href="https://affpros.net/?serial=1756&amp;creative_id=120&amp;anid=" target="_blank"
                               className="book-box__link">
                                <div className="book-box">
                                    <div className="book-box__wrap">
                                        <img src="/images/logo-book/pari.png" alt="img" className="book-box__img"/>
                                    </div>
                                    <div className="book-box__desc">
                                        <p className="book-box__bonus">Бонус</p>
                                        <p className="book-box__bonus-desc">до 5 000 руб.</p>
                                        <p className="book-box__bonus-style">cash</p>
                                    </div>
                                </div>
                            </a>
                            <a href="https://betspinup.ru/auuyh4au/" target="_blank" className="book-box__link">
                                <div className="book-box">
                                    <div className="book-box__wrap">
                                        <img src="/images/logo-book/pin-up.webp" alt="img" className="book-box__img"
                                        />
                                    </div>
                                    <div className="book-box__desc">
                                        <p className="book-box__bonus">Бонус</p>
                                        <p className="book-box__bonus-desc">до 30 000 руб.</p>
                                        <p className="book-box__bonus-style">freebet</p>
                                    </div>
                                </div>
                            </a>
                            <a href="http://wlligastavok.iaofr.com/C.ashx?btag=a_5898b_598c_&amp;affid=3993&amp;siteid=5898&amp;adid=598&amp;c"
                               target="_blank" className="book-box__link">
                                <div className="book-box">
                                    <div className="book-box__wrap">
                                        <img
                                            src="data:image/png;base64,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"
                                            alt="img" className="book-box__img fonbet-logo"/>
                                    </div>
                                    <div className="book-box__desc">
                                        <p className="book-box__bonus">Бонус</p>
                                        <p className="book-box__bonus-desc">до 10.000 руб.</p>
                                        <p className="book-box__bonus-style">freebet</p>
                                    </div>
                                </div>
                            </a>
                            <a href="https://trk.usxdtsqx.ru/c.php?t=2785&amp;c=23743&amp;clickid=REPLACE" target="_blank"
                               className="book-box__link">
                                <div className="book-box">
                                    <div className="book-box__wrap">
                                        <img src="/images/logo-book/betboom.webp" alt="img" className="book-box__img"
                                        />
                                    </div>
                                    <div className="book-box__desc">
                                        <p className="book-box__bonus">Бонус</p>
                                        <p className="book-box__bonus-desc">до 1 000 руб. </p>
                                        <p className="book-box__bonus-style">за регистрацию</p>
                                    </div>
                                </div>
                            </a>
                            <a href="https://trk.mstbt.ru/c.php?t=5197&amp;c=17317&amp;clickid=REPLACE" target="_blank"
                               className="book-box__link">
                                <div className="book-box">
                                    <div className="book-box__wrap">
                                        <img src="/images/logo-book/vulkan.png" alt="img" className="book-box__img"/>
                                    </div>
                                    <div className="book-box__desc">
                                        <p className="book-box__bonus">Бонус</p>
                                        <p className="book-box__bonus-desc">до 2 500 руб.</p>
                                        <p className="book-box__bonus-style">cash</p>
                                    </div>
                                </div>
                            </a>
                            <a href="https://trk.usxdtsqx.ru/c.php?t=4842&amp;c=16314&amp;clickid=REPLACE" target="_blank"
                               className="book-box__link">
                                <div className="book-box">
                                    <div className="book-box__wrap">
                                        <img
                                            src="data:image/png;base64,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"
                                            alt="img" className="book-box__img betcity-logo"/>
                                    </div>
                                    <div className="book-box__desc">
                                        <p className="book-box__bonus">Бонус</p>
                                        <p className="book-box__bonus-desc">до 10 000 руб.</p>
                                        <p className="book-box__bonus-style">freebet</p>
                                    </div>
                                </div>
                            </a>
                            <a href="https://trk.usxdtsqx.ru/c.php?t=5665&amp;c=18912&amp;clickid=REPLACE" target="_blank"
                               className="book-box__link">
                                <div className="book-box">
                                    <div className="book-box__wrap">
                                        <img
                                            src="data:image/png;base64,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"
                                            alt="img" className="book-box__img fonbet-logo"/>
                                    </div>
                                    <div className="book-box__desc">
                                        <p className="book-box__bonus">Бонус</p>
                                        <p className="book-box__bonus-desc">до 15 000 руб.</p>
                                        <p className="book-box__bonus-style">freebet</p>
                                    </div>
                                </div>
                            </a>

                            <a href="https://trk.mltb.su/c.php?t=3306&amp;c=9434&amp;clickid=REPLACE" id="melbet"
                               target="_blank" className="book-box__link">
                                <div className="book-box">
                                    <div className="book-box__wrap">
                                        <img
                                            src="data:image/png;base64,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"
                                            alt="img" className="book-box__img fonbet-logo"/>
                                    </div>
                                    <div className="book-box__desc">
                                        <p className="book-box__bonus">Бонус</p>
                                        <p className="book-box__bonus-desc">15 000 руб.</p>
                                        <p className="book-box__bonus-style">freebet</p>
                                    </div>
                                </div>
                            </a>
                            <a href="https://trk.1lnk.ru/c.php?t=5423&amp;c=18121&amp;clickid=REPLACE" target="_blank"
                               className="book-box__link">
                                <div className="book-box">
                                    <div className="book-box__wrap">
                                        <img
                                            src="data:image/png;base64,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"
                                            alt="img" className="book-box__img fonbet-logo"/>
                                    </div>
                                    <div className="book-box__desc">
                                        <p className="book-box__bonus">Бонус</p>
                                        <p className="book-box__bonus-desc">4 000 руб.</p>
                                        <p className="book-box__bonus-style">freebet</p>
                                    </div>
                                </div>
                            </a>
                            <a href="https://trk.usxdtsqx.ru/c.php?t=262&amp;c=24110&amp;clickid=REPLACE" target="_blank"
                               className="book-box__link">
                                <div className="book-box">
                                    <div className="book-box__wrap">
                                        <img
                                            src="data:image/png;base64,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"
                                            alt="img" className="book-box__img fonbet-logo"/>
                                    </div>
                                    <div className="book-box__desc">
                                        <p className="book-box__bonus">Бонус</p>
                                        <p className="book-box__bonus-desc">20 000 руб.</p>
                                        <p className="book-box__bonus-style">cash</p>
                                    </div>
                                </div>
                            </a>
                            <a href="https://refpagutk.top//L?tag=d_932435m_2393c_&amp;site=932435&amp;ad=2393"
                               target="_blank" className="book-box__link">
                                <div className="book-box">
                                    <div className="book-box__wrap">
                                        <img src="/images/logo-book/fansport.webp" alt="img" className="book-box__img"
                                        />
                                    </div>
                                    <div className="book-box__desc">
                                        <p className="book-box__bonus">Бонус</p>
                                        <p className="book-box__bonus-desc">до 100 euro</p>
                                        <p className="book-box__bonus-style">cash</p>
                                    </div>
                                </div>
                            </a>
                            <a href="https://moogeywv.top/euro-2020/?id=1mbz" target="_blank" className="book-box__link">
                                <div className="book-box">
                                    <div className="book-box__wrap">
                                        <img src="/images/logo-book/l2.png" alt="img" className="book-box__img"
                                        />
                                    </div>
                                    <div className="book-box__desc">
                                        <p className="book-box__bonus">Бонус</p>
                                        <p className="book-box__bonus-desc">до 25 000 руб.</p>
                                        <p className="book-box__bonus-style">cash</p>
                                    </div>
                                </div>
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
)
}
const AppInput = () =>
    {
        const placeholder = 'Type text...'
        return (
            <label>
                <input
                    placeholder={placeholder}
                    type="text"
                />
            </label>
        )
    }
const App = () =>
    {
        return (
            <>
                <Header/>
                <Layout/>
                <AppInput/>
                <AppList/>
            </>
        )
    }


export default App;
