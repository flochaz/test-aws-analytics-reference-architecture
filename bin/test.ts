// Copyright Amazon.com, Inc. or its affiliates. All Rights Reserved.
// SPDX-License-Identifier: MIT-0

import { App, Stack } from '@aws-cdk/core';
import { DataLakeStorage } from 'aws-analytics-reference-architecture';
import { DataGenerator } from 'aws-analytics-reference-architecture';
import { Dataset } from 'aws-analytics-reference-architecture';

const mockApp = new App();
const stack = new Stack(mockApp, 'testing-stack');
const lake = new DataLakeStorage(stack, 'testing-lake', {});
new DataGenerator(stack, 'testing-generator', {
  sinkArn: lake.rawBucket.bucketArn,
  dataset: Dataset.RETAIL_1GB_STORE_SALE,
  frequency: 30,
});
