# @penny-labs/openapi-penny-client@0.1.0

A TypeScript SDK client for the localhost API.

## Usage

First, install the SDK from npm.

```bash
npm install @penny-labs/openapi-penny-client --save
```

Next, try it out.


```ts
import {
  Configuration,
  AccountsApi,
} from '@penny-labs/openapi-penny-client';
import type { AggregateTransactionsRequest } from '@penny-labs/openapi-penny-client';

async function example() {
  console.log("🚀 Testing @penny-labs/openapi-penny-client SDK...");
  const config = new Configuration({ 
    // To configure API key authorization: SessionCookieAuth
    apiKey: "YOUR API KEY",
  });
  const api = new AccountsApi(config);

  const body = {
    // string | Comma-separated account IDs. When omitted, all user-owned accounts are included. (optional)
    accountIds: accountIds_example,
    // string (optional)
    q: q_example,
    // boolean (optional)
    pending: true,
    // Date (optional)
    dateFrom: 2013-10-20T19:20:30+01:00,
    // Date (optional)
    dateTo: 2013-10-20T19:20:30+01:00,
    // number (optional)
    amountMin: 1.2,
    // number (optional)
    amountMax: 1.2,
    // string (optional)
    categoryId: categoryId_example,
    // string | Comma-separated tag IDs. (optional)
    tagIds: tagIds_example,
    // 'any' | 'all' (optional)
    tagMode: tagMode_example,
  } satisfies AggregateTransactionsRequest;

  try {
    const data = await api.aggregateTransactions(body);
    console.log(data);
  } catch (error) {
    console.error(error);
  }
}

// Run the test
example().catch(console.error);
```


## Documentation

### API Endpoints

All URIs are relative to *http://localhost:8080*

| Class | Method | HTTP request | Description
| ----- | ------ | ------------ | -------------
*AccountsApi* | [**aggregateTransactions**](docs/AccountsApi.md#aggregatetransactions) | **GET** /v1/transactions/aggregates | Aggregate transactions for user-owned accounts
*AccountsApi* | [**createAccount**](docs/AccountsApi.md#createaccount) | **POST** /v1/accounts | Create account for current authenticated user
*AccountsApi* | [**createTransaction**](docs/AccountsApi.md#createtransaction) | **POST** /v1/accounts/{accountID}/transactions | Create a transaction for an account owned by the current authenticated user
*AccountsApi* | [**getAccountByID**](docs/AccountsApi.md#getaccountbyid) | **GET** /v1/accounts/{accountID} | Get account by ID for current authenticated user
*AccountsApi* | [**getCurrentBalance**](docs/AccountsApi.md#getcurrentbalance) | **GET** /v1/accounts/{accountID}/balances/current | Get latest balance snapshot for an account owned by the current authenticated user
*AccountsApi* | [**getTransactionByID**](docs/AccountsApi.md#gettransactionbyid) | **GET** /v1/accounts/{accountID}/transactions/{transactionID} | Get a transaction by ID for an owned account
*AccountsApi* | [**listAccounts**](docs/AccountsApi.md#listaccounts) | **GET** /v1/accounts | List accounts for current authenticated user
*AccountsApi* | [**listBalances**](docs/AccountsApi.md#listbalances) | **GET** /v1/accounts/{accountID}/balances | List balance snapshots for an account owned by the current authenticated user
*AccountsApi* | [**listTransactions**](docs/AccountsApi.md#listtransactions) | **GET** /v1/accounts/{accountID}/transactions | List transactions for an account owned by the current authenticated user
*AccountsApi* | [**listTransactionsForAccounts**](docs/AccountsApi.md#listtransactionsforaccounts) | **GET** /v1/transactions | List transactions across specified accounts owned by the current authenticated user
*AccountsApi* | [**patchAccount**](docs/AccountsApi.md#patchaccount) | **PATCH** /v1/accounts/{accountID} | Patch account fields for current authenticated user
*AccountsApi* | [**patchTransaction**](docs/AccountsApi.md#patchtransaction) | **PATCH** /v1/accounts/{accountID}/transactions/{transactionID} | Patch mutable transaction fields by ID for an owned account
*AccountsApi* | [**upsertBalance**](docs/AccountsApi.md#upsertbalance) | **POST** /v1/accounts/{accountID}/balances | Upsert a balance snapshot for an account owned by the current authenticated user
*AuthApi* | [**getSessionUser**](docs/AuthApi.md#getsessionuser) | **GET** /v1/auth/me | Get current authenticated user
*AuthApi* | [**signin**](docs/AuthApi.md#signin) | **POST** /v1/auth/signin | Authenticate credentials and start session
*AuthApi* | [**signout**](docs/AuthApi.md#signout) | **POST** /v1/auth/signout | Revoke current session token and clear session cookie
*AuthApi* | [**signup**](docs/AuthApi.md#signup) | **POST** /v1/auth/signup | Create local credentials and start session
*BudgetsApi* | [**createBudget**](docs/BudgetsApi.md#createbudget) | **POST** /v1/budgets | Create a budget for current authenticated user
*BudgetsApi* | [**createBudgetPeriod**](docs/BudgetsApi.md#createbudgetperiod) | **POST** /v1/budgets/{budgetID}/periods | Create a budget period for a budget owned by the current authenticated user
*BudgetsApi* | [**deleteBudget**](docs/BudgetsApi.md#deletebudget) | **DELETE** /v1/budgets/{budgetID} | Delete budget by ID for current authenticated user
*BudgetsApi* | [**getBudgetByID**](docs/BudgetsApi.md#getbudgetbyid) | **GET** /v1/budgets/{budgetID} | Get budget by ID for current authenticated user
*BudgetsApi* | [**getBudgetPeriodByID**](docs/BudgetsApi.md#getbudgetperiodbyid) | **GET** /v1/budgets/{budgetID}/periods/{budgetPeriodID} | Get budget period by ID for a budget owned by the current authenticated user
*BudgetsApi* | [**listBudgetPeriods**](docs/BudgetsApi.md#listbudgetperiods) | **GET** /v1/budgets/{budgetID}/periods | List budget periods for a budget owned by the current authenticated user
*BudgetsApi* | [**listBudgets**](docs/BudgetsApi.md#listbudgets) | **GET** /v1/budgets | List budgets for current authenticated user
*BudgetsApi* | [**patchBudget**](docs/BudgetsApi.md#patchbudget) | **PATCH** /v1/budgets/{budgetID} | Patch budget fields for current authenticated user
*BudgetsApi* | [**patchBudgetPeriod**](docs/BudgetsApi.md#patchbudgetperiod) | **PATCH** /v1/budgets/{budgetID}/periods/{budgetPeriodID} | Patch budget period fields for a budget owned by the current authenticated user
*BudgetsApi* | [**replaceBudgetPeriodAllocations**](docs/BudgetsApi.md#replacebudgetperiodallocations) | **PUT** /v1/budgets/{budgetID}/periods/{budgetPeriodID}/allocations | Replace all category allocations for a budget period owned by the current authenticated user
*CategoriesApi* | [**createCategory**](docs/CategoriesApi.md#createcategory) | **POST** /v1/categories | Create a category for current authenticated user
*CategoriesApi* | [**deleteCategory**](docs/CategoriesApi.md#deletecategory) | **DELETE** /v1/categories/{categoryID} | Delete category by ID for current authenticated user
*CategoriesApi* | [**getCategoryByID**](docs/CategoriesApi.md#getcategorybyid) | **GET** /v1/categories/{categoryID} | Get category by ID for current authenticated user
*CategoriesApi* | [**listCategories**](docs/CategoriesApi.md#listcategories) | **GET** /v1/categories | List categories for current authenticated user
*CategoriesApi* | [**patchCategory**](docs/CategoriesApi.md#patchcategory) | **PATCH** /v1/categories/{categoryID} | Patch category fields for current authenticated user
*ExportsApi* | [**createTransactionExport**](docs/ExportsApi.md#createtransactionexportoperation) | **POST** /v1/exports/transactions | Create a transactions export job
*ExportsApi* | [**downloadTransactionExport**](docs/ExportsApi.md#downloadtransactionexport) | **GET** /v1/exports/transactions/{exportID}/download | Download a completed transaction export
*ExportsApi* | [**getTransactionExportByID**](docs/ExportsApi.md#gettransactionexportbyid) | **GET** /v1/exports/transactions/{exportID} | Get transaction export job status
*TagsApi* | [**attachTagToTransaction**](docs/TagsApi.md#attachtagtotransaction) | **PUT** /v1/accounts/{accountID}/transactions/{transactionID}/tags/{tagID} | Attach a tag to a transaction owned by the current authenticated user
*TagsApi* | [**createTag**](docs/TagsApi.md#createtag) | **POST** /v1/tags | Create a tag for current authenticated user
*TagsApi* | [**deleteTag**](docs/TagsApi.md#deletetag) | **DELETE** /v1/tags/{tagID} | Delete tag by ID for current authenticated user
*TagsApi* | [**detachTagFromTransaction**](docs/TagsApi.md#detachtagfromtransaction) | **DELETE** /v1/accounts/{accountID}/transactions/{transactionID}/tags/{tagID} | Detach a tag from a transaction owned by the current authenticated user
*TagsApi* | [**getTagByID**](docs/TagsApi.md#gettagbyid) | **GET** /v1/tags/{tagID} | Get tag by ID for current authenticated user
*TagsApi* | [**listTags**](docs/TagsApi.md#listtags) | **GET** /v1/tags | List tags for current authenticated user
*TagsApi* | [**patchTag**](docs/TagsApi.md#patchtag) | **PATCH** /v1/tags/{tagID} | Patch tag fields for current authenticated user
*TagsApi* | [**replaceTransactionTags**](docs/TagsApi.md#replacetransactiontags) | **PUT** /v1/accounts/{accountID}/transactions/{transactionID}/tags | Replace all tags for a transaction owned by the current authenticated user
*UsersApi* | [**createUser**](docs/UsersApi.md#createuser) | **POST** /v1/users | Create user
*UsersApi* | [**getUserByID**](docs/UsersApi.md#getuserbyid) | **GET** /v1/users/{userID} | Get user by ID (self only)
*UsersApi* | [**listUsers**](docs/UsersApi.md#listusers) | **GET** /v1/users | List users (admin only)


### Models

- [Account](docs/Account.md)
- [AccountCreateRequest](docs/AccountCreateRequest.md)
- [AccountListResponse](docs/AccountListResponse.md)
- [AccountPatchRequest](docs/AccountPatchRequest.md)
- [AuthCredentialRequest](docs/AuthCredentialRequest.md)
- [Balance](docs/Balance.md)
- [BalanceCreateRequest](docs/BalanceCreateRequest.md)
- [BalanceListResponse](docs/BalanceListResponse.md)
- [BankAccountStatus](docs/BankAccountStatus.md)
- [BankAccountSubtype](docs/BankAccountSubtype.md)
- [BankAccountType](docs/BankAccountType.md)
- [Budget](docs/Budget.md)
- [BudgetCreateRequest](docs/BudgetCreateRequest.md)
- [BudgetListResponse](docs/BudgetListResponse.md)
- [BudgetPatchRequest](docs/BudgetPatchRequest.md)
- [BudgetPeriod](docs/BudgetPeriod.md)
- [BudgetPeriodAllocation](docs/BudgetPeriodAllocation.md)
- [BudgetPeriodAllocationsReplaceRequest](docs/BudgetPeriodAllocationsReplaceRequest.md)
- [BudgetPeriodCreateRequest](docs/BudgetPeriodCreateRequest.md)
- [BudgetPeriodListResponse](docs/BudgetPeriodListResponse.md)
- [BudgetPeriodPatchRequest](docs/BudgetPeriodPatchRequest.md)
- [BudgetPeriodStatus](docs/BudgetPeriodStatus.md)
- [Category](docs/Category.md)
- [CategoryCreateRequest](docs/CategoryCreateRequest.md)
- [CategoryListResponse](docs/CategoryListResponse.md)
- [CategoryPatchRequest](docs/CategoryPatchRequest.md)
- [CreateTransactionExportRequest](docs/CreateTransactionExportRequest.md)
- [ErrorResponse](docs/ErrorResponse.md)
- [SessionAuthResponse](docs/SessionAuthResponse.md)
- [SignoutResponse](docs/SignoutResponse.md)
- [Tag](docs/Tag.md)
- [TagCreateRequest](docs/TagCreateRequest.md)
- [TagListResponse](docs/TagListResponse.md)
- [TagPatchRequest](docs/TagPatchRequest.md)
- [Transaction](docs/Transaction.md)
- [TransactionAggregateResponse](docs/TransactionAggregateResponse.md)
- [TransactionCreateRequest](docs/TransactionCreateRequest.md)
- [TransactionExportFormat](docs/TransactionExportFormat.md)
- [TransactionExportJob](docs/TransactionExportJob.md)
- [TransactionExportStatus](docs/TransactionExportStatus.md)
- [TransactionListResponse](docs/TransactionListResponse.md)
- [TransactionPatchRequest](docs/TransactionPatchRequest.md)
- [TransactionPaymentChannel](docs/TransactionPaymentChannel.md)
- [TransactionSpendingByCategoryPoint](docs/TransactionSpendingByCategoryPoint.md)
- [TransactionSpendingByDayPoint](docs/TransactionSpendingByDayPoint.md)
- [TransactionTagsReplaceRequest](docs/TransactionTagsReplaceRequest.md)
- [User](docs/User.md)
- [UserCreateRequest](docs/UserCreateRequest.md)
- [UserListResponse](docs/UserListResponse.md)
- [UserStatus](docs/UserStatus.md)

### Authorization


Authentication schemes defined for the API:
<a id="SessionCookieAuth"></a>
#### SessionCookieAuth


- **Type**: API key
- **API key parameter name**: `penny_session_token`
- **Location**: 

## About

This TypeScript SDK client supports the [Fetch API](https://fetch.spec.whatwg.org/)
and is automatically generated by the
[OpenAPI Generator](https://openapi-generator.tech) project:

- API version: `v1`
- Package version: `0.1.0`
- Generator version: `7.20.0`
- Build package: `org.openapitools.codegen.languages.TypeScriptFetchClientCodegen`

The generated npm module supports the following:

- Environments
  * Node.js
  * Webpack
  * Browserify
- Language levels
  * ES5 - you must have a Promises/A+ library installed
  * ES6
- Module systems
  * CommonJS
  * ES6 module system


## Development

### Building

To build the TypeScript source code, you need to have Node.js and npm installed.
After cloning the repository, navigate to the project directory and run:

```bash
npm install
npm run build
```

### Publishing

Once you've built the package, you can publish it to npm:

```bash
npm publish
```

## License

[See LICENSE.md]()
