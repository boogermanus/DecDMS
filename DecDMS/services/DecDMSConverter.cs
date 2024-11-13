using DecDMS.Interfaces;

namespace DecDMS.Services;

public class DecDMSConverter : IDecDMSConverter
{
    public static readonly int MINUTES = 60;
    public static readonly int SECONDS = 3600;
    public static readonly float MIN_LONG = -180.0f;
    public static readonly float MAX_LONG = 180.0f;
    public static readonly float MIN_LAT = -90.0f;
    public static readonly float MAX_LAT = 90.0f;
    public static readonly float ZERO = 0.0f;
}