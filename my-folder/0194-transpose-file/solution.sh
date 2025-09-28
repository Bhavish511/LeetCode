# Read from the file file.txt and print its transposed content to stdout.
awk '{for(i=1;i<=NF;i++) a[i,NR]=$i} NF>p{p=NF} END{for(i=1;i<=p;i++){for(j=1;j<=NR;j++) printf "%s%s", a[i,j], (j==NR?ORS:OFS)}}' file.txt


