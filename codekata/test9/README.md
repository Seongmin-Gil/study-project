# Selection Sort(선택정렬)

정렬 알고리즘은 순서가 없던 데이터를 순서대로 바꾸어 나열하는 알고리즘입니다.
정렬을 하는 방법은 여러가지가 있는데, 그 중에 유명한 알고리즘은 아래 4가지가 있습니다.
- 선택정렬
- 버블정렬
- 삽입정렬
- 퀵정렬 

오늘은 선택정렬을 배우겠습니다. 
선택정렬은 정렬되지 않은 데이터 중 가장 작은 데이터를 선택해서
맨 앞에서부터 순서대로 정렬해 나가는 알고리즘입니다.

영어 설명 한 번 보시죠!
```
It has O(n2) time complexity, making it inefficient on large lists, and generally performs worse than the similar insertion sort.
Selection sort is noted for its simplicity, and it has performance advantages over more complicated algorithms in certain situations, particularly where auxiliary memory is limited.
```

예제를 통해 보겠습니다.

정렬을 해야하는 배열은 [7,5,4,2] 입니다. 

첫 번째 loop에서는 index 0부터 3까지 확인하며 가장 작은 수를 찾습니다.
2 이므로 index 0의 7과 교체합니다. -> [2,5,4,7]


두 번째는 index 1부터 3까지 확인하며 가장 작은 수를 찾습니다.
4이므로 index 1의 5와 교체합니다 -> [2,4,5,7]

세 번째는 index 2부터 3까지.. 이런식으로 가장 작은 수를 선택해서 순서대로 교체하는 것을 선택정렬이라고 합니다.

# Problem Statement

nums라는 정렬되지 않은 숫자 배열을 주면, 오름차순(1,2,3..10) 으로 정렬된 배열을 return해주세요.
선택정렬 알고리즘으로 구현하셔야겠죠??# Selection Sort(선택정렬)

정렬 알고리즘은 순서가 없던 데이터를 순서대로 바꾸어 나열하는 알고리즘입니다.
정렬을 하는 방법은 여러가지가 있는데, 그 중에 유명한 알고리즘은 아래 4가지가 있습니다.
- 선택정렬
- 버블정렬
- 삽입정렬
- 퀵정렬 

오늘은 선택정렬을 배우겠습니다. 
선택정렬은 정렬되지 않은 데이터 중 가장 작은 데이터를 선택해서
맨 앞에서부터 순서대로 정렬해 나가는 알고리즘입니다.

영어 설명 한 번 보시죠!
```
It has O(n2) time complexity, making it inefficient on large lists, and generally performs worse than the similar insertion sort.
Selection sort is noted for its simplicity, and it has performance advantages over more complicated algorithms in certain situations, particularly where auxiliary memory is limited.
```

예제를 통해 보겠습니다.

정렬을 해야하는 배열은 [7,5,4,2] 입니다. 

첫 번째 loop에서는 index 0부터 3까지 확인하며 가장 작은 수를 찾습니다.
2 이므로 index 0의 7과 교체합니다. -> [2,5,4,7]


두 번째는 index 1부터 3까지 확인하며 가장 작은 수를 찾습니다.
4이므로 index 1의 5와 교체합니다 -> [2,4,5,7]

세 번째는 index 2부터 3까지.. 이런식으로 가장 작은 수를 선택해서 순서대로 교체하는 것을 선택정렬이라고 합니다.

# Problem Statement

nums라는 정렬되지 않은 숫자 배열을 주면, 오름차순(1,2,3..10) 으로 정렬된 배열을 return해주세요.
선택정렬 알고리즘으로 구현하셔야겠죠??