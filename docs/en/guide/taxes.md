# Salary and Taxes

## Where to Find the Tax Authority Website?

You can access the tax authority website at [https://www.gov.uk/hmrconline](https://www.gov.uk/hmrconline). Registration requires a payslip.

The tax authority has a mobile app, but it's not particularly convenient.

## Tax Return

If your total income (salary, bonuses, shares, etc.) for the tax year exceeds £100k, you'll need to fill out a [tax return](https://www.gov.uk/self-assessment-tax-returns). **You'll probably need to do this at some point.** Prepare in advance and try not to throw away receipts; keep records of income and expenses.

Of course, there's no point saving a Tesco receipt, but you should keep records of buying and selling shares, dividends, and other income sources. Look online at a sample return to understand what to fill in.

If not all documents are preserved, you can fill in approximately from memory, but you'll need to provide explanations. It's better to have documentary evidence.

Records must be kept for at least 4 years since the tax authority can ask you to fill in returns for previous years, not just the last one.

To fill out a tax return through self-assessment, you need to [register](https://www.gov.uk/log-in-file-self-assessment-tax-return) separately. An activation code will come by regular post. After registration, you can fill out the return through your HMRC account.

You may need to pay taxes the employer didn't calculate. This happens. **Don't delay filling out the return since the payment deadline coincides with the filing deadline.** Note that the amount can be large, on the order of several thousand pounds.

## How to Calculate Capital Gains Tax?

In your tax return, you'll probably need to calculate data for [Capital Gains Tax](https://www.gov.uk/capital-gains-tax).

There are two relatively working calculators:

* [cgtcalc](https://github.com/mattjgalloway/cgtcalc) (works great, but data must be prepared manually),
* [capital_gains_calculator](https://github.com/KapJI/capital_gains_calculator) (works so-so, but can import Schwab reports after some tweaking).

(When I have free time, I'll finish my own calculator.)

When using the Schwab calculator, be careful. You need to download and specify two CSV files: transactions and share vesting. Both can be downloaded from the Schwab site without problems in Accounts → History using the Export link in the upper right corner. For one CSV, select Individual from the dropdown; for the other, Equity Award Center.

![](/guide/images/image4.png)

The command will be something like:

You may need to add exchange rates for recent months to the file cgt_calc/resources/initial_prices.csv (don't forget to reinstall the script with --force-reinstall afterward). The pound rate can be [found on gov.uk](https://www.gov.uk/government/collections/exchange-rates-for-customs-and-vat).

In other cases, **it's strongly recommended to open an** [**ISA**](broken-reference). Income received through ISA isn't taxed.

## Taxes on Share Trading

When buying shares, you need to pay a small amount, but this only applies to British company shares. Usually, the platform deducts this amount automatically.

Net income from selling shares — so-called Capital Gains Tax — isn't taxed if it doesn't exceed [£12,300](https://www.gov.uk/capital-gains-tax/allowances). Net income is considered, meaning the difference between purchase and sale prices. If income is negative, you can request a tax deduction.

For dividends, the threshold is lower — [£2,000](https://www.gov.uk/tax-on-dividends).

No taxes on income are paid at all if earned through trading from an [ISA](broken-reference) account.

## The Bonus Problem

Right after starting work, your first salary includes a bonus. It's a fairly large amount. The tax authority doesn't see a breakdown of your income, only the total. So when the first salary is very large, they conclude this is your typical monthly amount and tax you at a higher rate. Of course, a recalculation happens at year-end, but there's no point waiting until April.

To avoid this, register on the tax authority website and specify your actual salary and separately the bonus amount. You don't need to specify an exact number with all additions (transport, phone, etc.); the tax authority will account for this at year-end and deduct what's owed.

## How Taxes Are Calculated

There's no real communication with the tax authority; they calculate everything themselves. But if total income was over £100k, you'll need to fill out a return. It must be submitted by January 31. That is, the return for the 2019-2020 tax year, which ended in April 2020, must be filed by January 31, 2021.

Note that when filing a return, you'll likely need to pay something extra, and processing the return and payment can take several days. So don't leave everything to the last day!

If there's remaining debt, they'll increase your tax for the next year, or you can simply pay it. The second option is preferable as it simplifies household accounting by not carrying a "tail" from previous years.

It's worth registering on the HMRC website. There you can adjust information about your income so taxes are calculated more accurately.

## Emergency Tax Code When Starting Work

When first employed, you'll likely get an emergency tax code. This is because the tax authority only sees the amount paid by the company without a breakdown by category. And if you got a bonus in your first month, the tax authority decides this is your salary and starts deducting taxes accordingly.
