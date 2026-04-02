
# TransactionInsightsResponse


## Properties

Name | Type
------------ | -------------
`summary` | [TransactionInsightsSummary](TransactionInsightsSummary.md)
`budgetRows` | [Array&lt;TransactionInsightsBudgetRow&gt;](TransactionInsightsBudgetRow.md)
`categoryBreakdown` | [Array&lt;TransactionInsightsCategoryBreakdownPoint&gt;](TransactionInsightsCategoryBreakdownPoint.md)
`actualByDay` | [Array&lt;TransactionInsightsTimePoint&gt;](TransactionInsightsTimePoint.md)
`projectedByDay` | [Array&lt;TransactionInsightsTimePoint&gt;](TransactionInsightsTimePoint.md)
`spendingOverTime` | [Array&lt;TransactionInsightsTimePoint&gt;](TransactionInsightsTimePoint.md)
`sankeyNodes` | [Array&lt;TransactionInsightsSankeyNode&gt;](TransactionInsightsSankeyNode.md)
`sankeyLinks` | [Array&lt;TransactionInsightsSankeyLink&gt;](TransactionInsightsSankeyLink.md)
`topMerchants` | [Array&lt;TransactionInsightsTopMerchant&gt;](TransactionInsightsTopMerchant.md)
`recentTransactions` | [Array&lt;TransactionInsightsRecentTransaction&gt;](TransactionInsightsRecentTransaction.md)

## Example

```typescript
import type { TransactionInsightsResponse } from '@penny-labs/openapi-penny-client'

// TODO: Update the object below with actual values
const example = {
  "summary": null,
  "budgetRows": null,
  "categoryBreakdown": null,
  "actualByDay": null,
  "projectedByDay": null,
  "spendingOverTime": null,
  "sankeyNodes": null,
  "sankeyLinks": null,
  "topMerchants": null,
  "recentTransactions": null,
} satisfies TransactionInsightsResponse

console.log(example)

// Convert the instance to a JSON string
const exampleJSON: string = JSON.stringify(example)
console.log(exampleJSON)

// Parse the JSON string back to an object
const exampleParsed = JSON.parse(exampleJSON) as TransactionInsightsResponse
console.log(exampleParsed)
```

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


