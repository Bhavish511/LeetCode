class Solution 
{
public:
    int scoreOfString(string s)
    {
        int size = s.length();
        int* arr = new int[size];
        int result = 0;

        for (int i = 0; i < size; i++)
        {
            int asci = s[i];
            arr[i] = asci;

            if (i > 0)
            {
                result +=abs(arr[i] - arr[i - 1]);
            }
        }
        return result;
    }

};
