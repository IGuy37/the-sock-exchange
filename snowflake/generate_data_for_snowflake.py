

import pandas as pd
import numpy as np
from datetime import datetime

# Generate random data
data = {
    'Date': [datetime.now().strftime('%Y-%m-%d') for _ in range(1000000)],
    'Size': np.random.choice(['Small', 'Medium', 'Large'], size=1000000),
    'Color': np.random.choice(['Red', 'Blue', 'Green', 'Yellow', 'Black'], size=1000000),
    'Pattern': np.random.choice(['Striped', 'Dotted', 'Solid'], size=1000000),
    'Material': np.random.choice(['Cotton', 'Wool', 'Polyester'], size=1000000),
    'Condition': np.random.choice(['Excellent', 'Good', 'Fair'], size=1000000),
    'ForFoot': np.random.choice(['Left', 'Right', 'Both'], size=1000000),
    'Price': np.random.uniform(5, 50, size=1000000).round(2),
    'Comments': ['Sample comment' for _ in range(1000000)]
}

# Create a DataFrame
df = pd.DataFrame(data)

# Add Sock_ID attribute
df['Sock_ID'] = np.arange(2, 1000002)  # Incrementing number starting at 2

# Save DataFrame to Parquet file
parquet_file = 'sock_exchange_data.parquet'
df.to_parquet(parquet_file)

print('Done!')