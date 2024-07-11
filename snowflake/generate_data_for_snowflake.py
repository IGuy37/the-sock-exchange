import pandas as pd
import numpy as np
from datetime import datetime

# Generate random data
num_socks = 1_000_000
data = {
    'Date': [datetime.now().strftime('%Y-%m-%d') for _ in range(num_socks)],
    'Size': np.random.choice(['Small', 'Medium', 'Large'], size=num_socks),
    'Color': np.random.choice(['Red', 'Blue', 'Green', 'Yellow', 'Black'], size=num_socks),
    'Pattern': np.random.choice(['Striped', 'Dotted', 'Solid'], size=num_socks),
    'Material': np.random.choice(['Cotton', 'Wool', 'Polyester'], size=num_socks),
    'Condition': np.random.choice(['Excellent', 'Good', 'Fair'], size=num_socks),
    'ForFoot': np.random.choice(['Left', 'Right', 'Both'], size=num_socks),
    'Price': np.random.uniform(5, 50, size=num_socks).round(2),
    'Comments': ['Sample comment' for _ in range(num_socks)]
}

# Create a DataFrame
df = pd.DataFrame(data)

# Add Sock_ID attribute
start_id = 2
df['Sock_ID'] = np.arange(start_id, num_socks + start_id)  # Incrementing number starting at 2

# Save DataFrame to Parquet file
parquet_file = 'sock_exchange_data.parquet'
df.to_parquet(parquet_file)

print('Done!')