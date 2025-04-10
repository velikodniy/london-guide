# Акции

## Как зарегистрироваться в Schwab?

После того как вы начнете работать через какое-то время, вам придет письмо, в котором будет написано по какой цене вам будут начислятся акции. Также там будет ссылка на регистрацию в Schwab.

Country of Residence на первой странице регистрации — страна проживания, то есть в нашем случае UK. Country of Citizenship — гражданство.

Дальше попросят номер телефона, email и домашний адрес (указывайте свой адрес в UK). Также сразу спрашивают Tax Identification Number (TIN), для стран где вы налоговый резидент. Для UK это NI Number с обратной стороны BRP.

Можно также поставить приложение на телефон.

## Форма W8-BEN

После регистрации в Schwab сразу начинают приходить письма с просьбами заполнить формы W-8\*/W-9\*.

**Если вы не гражданин US, то форму W-8BEN заполнить нужно обязательно**, иначе придется платить ещё более крупный налог, чем вы и так платите при получении акций.

Самый тонкий момент состоит в указании «country of citizenship for tax purposes». Скорее всего у вас гражданство (citizenship) только страны, откуда вы приехали, однако налоги вы будете платить в UK. Нужно указывать «country of citizenship for tax purposes» по паспорту. Если укажете UK, то у вас не примут форму, так как британского паспорта у вас нет.

Пример заполнения первой части приведён ниже.

![](./images/image5.png)

После заполнения первой части появится сообщение, что адрес у вас в UK, а не в стране, где вы гражданин. Нужно выбрать «None of the above» и написать простое объяснение в стиле: «I am a citizen of \_\_\_\_, but currently reside and pay taxes in the United Kingdom».

Вам может встретиться вопрос «Is this submission being made to claim treaty benefits?». На сайте налоговой США есть [список стран](https://www.irs.gov/businesses/international-businesses/united-states-income-tax-treaties-a-to-z), с которыми США заключили договор об избежании двойного налогообложения. Великобритания есть в этом списке, а так как вы налоговый резидент Великобритании, то скорее всего нужно ответить Yes.

Затем у вас попросят tax identification number (TIN) уже для UK. Это NI Number (NIN), который обычно указан с обратной стороны BRP. (Это также может быть UTR, который можно найти в запросе на заполнение self-assessment от HMRC, если вы уже не первый год в стране.)

:::WARNING
**Внимательно читайте, что вас спрашивают в форме и отвечайте правду.** Не стоит следовать приведённым советам бездумно, так как ваша ситуация может отличаться.
:::

## Как продать акции?

Имейте в виду следующее, что инсайдерская торговля (а продажа акций сотрудниками вне торгового окна это она и есть) — это преступление. И если ей заниматься не по правилам, то будут большие проблемы.

Чтобы продать акции, нужно создать order — приказ продать на определённых условиях.

В верхнем меню выбираем Trade и заполняем форму. В ней указываем:

* symbol — у нас это SNAP.
* action — покупаем или продаём.
* quantity — количество.
* order type — правило, по которому будут продавать. Например, Limit — продать по этой цене как только акция будет стоить столько или дороже (если дороже, то акция всё равно будет продана по этой цене). Про другие типы можно почитать в справке, если нажать на вопросик рядом с полем.
* timing — время жизни ордера.

На картинке ниже пример.

![](./images/image2.png)

Не забудьте, что если за год доход (gain, разница между ценой, по которой акции выдали и по которой продали) превышает £12300 в год (сумма [меняется](https://www.gov.uk/capital-gains-tax/allowances) из года в год), то нужно платить Capital Gain Tax. С другой стороны, если доход отрицательный, то можно попросить налоговый вычет.

<!-- TODO: рассказать про виды ордеров -->

## Как вывести деньги из Schwab?

После продажи акций деньги попадают на валютный счёт в Schwab. Вывести их можно только через двое суток после продажи.

Есть два способа вывести их на банк в UK:

1. Send Wire (в меню Account) — вам потребуется счёт с IBAN. У Monzo его нет, но он есть, например, у Barclays.
2. Перевод на долларовый счёт в банке США — бесплатно, но нужно будет заплатить комиссию за перевод в банк UK и за конвертацию валюты.

В обоих случаях перевод в среднем занимает 2-3 дня. При онлайн-переводе (первый способ) могут позвонить и спросить подтверждение.

Сейчас комиссии на вывод средств из Schwab нет и не нужно общаться с поддержкой, так что можно использовать этот способ по умолчанию, но посмотрите, что для вас выгоднее. Возможно, у второго способа комиссия будет меньше.

Счёт в американском банке можно открыть в TransferWise, через него же деньги выводятся, конвертируются или тратятся, так как TransferWise выдаёт карточку MasterCard.

### Перевод напрямую из Schwab

* Открываем на сайте Account → Send Wire.
* Выберите: From — Individual, To — International (Foreign Currency).
* Ниже введите банковские реквизиты. Вам потребуется IBAN. В этом руководстве есть [раздел, как его узнать для Barclays](broken-reference).
* В течение суток вам позвонит сотрудник для подтверждения, зачитает номера счетов и суммы и спросит, всё ли верно.
* В течение недели деньги появятся на счёте в британском банке.

### Перевод с помощью Wise

Инструкция по регистрации:

1. Заводим счёт в американском банке через Wise.
2. Регистрируем его в Schwab (Transfers & Payments → External Accounts → Link an External Account).

   Регистрация занимает пару дней. Schwab для проверки сделает две транзакции по несколько центов, нужно будет эти суммы использовать как код подтверждения.

Инструкция по выводу:

1. Идём в чатик поддержки: Accounts → Equity Awards → Chat (см. рисунок ниже)
2. Сходу пишем, что хотим вывести $X на счёт Y.
3. Ждём перевода (пара банковских дней).

![](./images/image3.png)

## Где можно покупать и продавать акции в UK?

**Для торговли акциями имеет смысл открыть Stocks\&Shares ISA, так как все доходы, полученные от него не облагаются налогом.** Это значительно уменьшит головную боль при заполнении налоговой декларации.

Заметьте, что есть разные виды ISA и можно одновременно открыть несколько пока они разных видов.

Популярные брокеры:

* [DEGIRO](https://www.degiro.co.uk/) — нидерландский брокер, доступ к разным биржам, адекватные комиссии, удобное мобильное приложение. Комиссии минимальны при торговле американскими акциями. При регистрации спросят, какой тип счёта выбрать: Custody или Basic. Первый защищён от банкротства брокеров, но с ним не получится торговать, например, опционами или с плечом. Впрочем, для базовой торговли хватит. Конвертировать Custody в Basic нельзя, но можно завести несколько счетов, это разрешено.
* [Trading 212](https://www.trading212.com/) — нет комиссий, можно открыть ISA, но снятие средств ограничено. Можно попробовать попользоваться приложением в демо-режиме сразу после установки.
* [Vanguard](https://www.vanguardinvestor.co.uk/) — выгодные предложения, но можно торговать только тем, что предлагает сам Vanguard. С другой стороны, у них есть, например, S\&P 500 (VUSA) и другие интересные ETF, так что это хороший вариант для долгосрочных вложений.
* [FreeTrade](https://freetrade.io/), туда можно перенести Stocks & Shares ISA. Это позволяет торговать и получать дивиденды без налогов в пределах своего allowance. Если торговать без ISA, то нужно платить довольно большие [налоги](https://blog.freetrade.io/the-totally-not-complicated-investment-tax-post-188c1583d8b4). Однако, возможности по торговле заметно ограничены. Можно только купить или продать по рыночной цене. С другой стороны можно покупать дробное число акций. В целом, для чего-то кроме ISA связываться не стоит, так как нет встроенного экспорта транзакций и потом сложно рассчитывать налоги.
* [Revolut](https://www.revolut.com/) — многие жалуются на внезапно закрывающиеся счета.
* Инвестиционные услуги крупных банков (обычно дороже).
